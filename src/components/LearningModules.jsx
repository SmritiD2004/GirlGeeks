// src/components/LearningModules.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { BookOpen, CheckCircle, Play, Trophy } from 'lucide-react';
import { MODULE_TEMPLATES } from '../data/moduleContent';
import ModuleQuiz from './ModuleQuiz';

export default function LearningModules({ selectedModuleId }) {
  const { profile } = useAuth();
  const { t, getMultilingual } = useLanguage();

  const [modules, setModules] = useState([]);
  const [userProgress, setUserProgress] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    loadModules();
  }, [profile?.id]);

  useEffect(() => {
    if (selectedModuleId && modules.length > 0) {
      const module = modules.find((m) => m.id === selectedModuleId);
      if (module) {
        setSelectedModule(module);
        setShowContent(true);
        setShowQuiz(false);
      }
    }
  }, [selectedModuleId, modules]);

  const loadModules = async () => {
    if (!profile?.id) {
      setLoading(false);
      return;
    }

    try {
      const [modulesRes, progressRes] = await Promise.all([
        supabase
          .from('learning_modules')
          .select('*')
          .order('order_index', { ascending: true }),
        supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', profile.id),
      ]);

      const dbModules = modulesRes?.data || [];

      // If DB has no rows, fall back to static templates (no Supabase ids)
      const finalModules = dbModules.length > 0 ? dbModules : MODULE_TEMPLATES;

      setModules(finalModules);
      setUserProgress(progressRes?.data || []);
    } catch (error) {
      console.error('Error loading modules:', error);
    } finally {
      setLoading(false);
    }
  };

  const getModuleProgress = (moduleId) => {
    return userProgress.find((p) => p.module_id === moduleId);
  };

  const handleStartModule = (module) => {
    setSelectedModule(module);
    setShowContent(true);
    setShowQuiz(false);
  };

 const handleCompleteModule = async (quizScore) => {
  console.log('🔵 handleCompleteModule called with:', {
    quizScore,
    selectedModule: selectedModule?.id,
    profileId: profile?.id
  });

  if (!selectedModule || !profile?.id) {
    console.error('❌ Missing required data');
    alert('Error: Missing module or profile data');
    return;
  }

  try {
    const progress = getModuleProgress(selectedModule.id);
    const passed = quizScore >= (selectedModule.passing_score || 70);

    console.log('📊 Module completion details:', {
      moduleId: selectedModule.id,
      userId: profile.id,
      score: quizScore,
      passingScore: selectedModule.passing_score,
      passed,
      existingProgress: progress
    });

    if (progress) {
      console.log('📝 Updating existing progress...');
      
      const { data, error } = await supabase
        .from('user_progress')
        .update({
          completed: passed,
          completed_at: passed ? new Date().toISOString() : null,
          score: quizScore,
          quiz_passed: passed,
          quiz_attempts: (progress.quiz_attempts || 0) + 1,
        })
        .eq('id', progress.id)
        .select();
      
      if (error) {
        console.error('❌ Update error:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }
      
      console.log('✅ Update successful:', data);
    } else {
      console.log('📝 Inserting new progress...');
      
      const insertData = {
        user_id: profile.id,
        module_id: selectedModule.id,
        completed: passed,
        completed_at: passed ? new Date().toISOString() : null,
        score: quizScore,
        quiz_passed: passed,
        quiz_attempts: 1,
      };
      
      console.log('📤 Insert data:', insertData);
      
      const { data, error } = await supabase
        .from('user_progress')
        .insert(insertData)
        .select();
      
      if (error) {
        console.error('❌ Insert error:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }
      
      console.log('✅ Insert successful:', data);
    }

    console.log('✅ Progress saved successfully');

    if (passed) {
      console.log('🔥 Updating streak...');
      await updateStreak();
    }

    console.log('🔄 Reloading modules...');
    await loadModules();

    setShowQuiz(false);
    setShowContent(false);
    setSelectedModule(null);
    
    alert(passed ? '✅ Module completed!' : `Score: ${quizScore}%. Need ${selectedModule.passing_score || 70}% to pass.`);

  } catch (error) {
    console.error('❌ Complete exception:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    alert(`Failed to save progress: ${error.message}`);
  }
};

  const updateStreak = async () => {
    if (!profile?.id) return;

    try {
      const { data: streakData } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', profile.id)
        .maybeSingle();

      const today = new Date().toISOString().split('T')[0];

      if (streakData) {
        const lastDate = streakData.last_activity_date;
        const daysDiff =
          Math.floor(
            (new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24),
          );

        let newStreak = streakData.current_streak;
        if (daysDiff === 1) {
          newStreak += 1;
        } else if (daysDiff > 1) {
          newStreak = 1;
        }

        await supabase
          .from('streaks')
          .update({
            current_streak: newStreak,
            longest_streak: Math.max(newStreak, streakData.longest_streak),
            last_activity_date: today,
            updated_at: new Date().toISOString(),
          })
          .eq('user_id', profile.id);
      } else {
        await supabase.from('streaks').insert({
          user_id: profile.id,
          current_streak: 1,
          longest_streak: 1,
          last_activity_date: today,
        });
      }
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  // Quiz screen
  if (showQuiz && selectedModule) {
    const quizQuestions = selectedModule.quiz_questions || [];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-b">
          <button
            onClick={() => {
              setShowQuiz(false);
              setShowContent(true);
            }}
            className="text-emerald-600 hover:text-emerald-700 mb-4"
          >
            ← {t('backToContent') || 'Back to Content'}
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {getMultilingual(selectedModule.title)}
          </h1>
        </div>

        <ModuleQuiz
          questions={quizQuestions}
          passingScore={selectedModule.passing_score || 70}
          onComplete={handleCompleteModule}
          onRetry={() => {
            // optional retry hook
          }}
        />
      </div>
    );
  }

  // Content screen
  if (showContent && selectedModule) {
    return (
      <ModuleContent
        module={selectedModule}
        onComplete={() => {
          if (
            selectedModule.quiz_questions &&
            selectedModule.quiz_questions.length > 0
          ) {
            setShowContent(false);
            setShowQuiz(true);
          } else {
            handleCompleteModule(100);
          }
        }}
        onBack={() => {
          setShowContent(false);
          setShowQuiz(false);
          setSelectedModule(null);
        }}
      />
    );
  }

  // List view
  const categories = [...new Set(modules.map((m) => m.category))];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {t('learning')}
        </h1>
        <p className="text-gray-600">
          {t('learningSubtitle') ||
            'Explore bite-sized lessons designed for your financial journey'}
        </p>
      </div>

      {categories.map((category) => {
        const categoryModules = modules.filter(
          (m) => m.category === category,
        );

        return (
          <div
            key={category}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
              {t(`${category}`) || category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryModules.map((module) => {
                const progress = getModuleProgress(module.id);
                const isCompleted = progress?.completed;

                return (
                  <div
                    key={module.id || module.order_index}
                    className={`border-2 rounded-xl p-5 transition-all ${
                      isCompleted
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isCompleted ? 'bg-emerald-600' : 'bg-gray-100'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle
                            className="text-white"
                            size={24}
                          />
                        ) : (
                          <BookOpen
                            className="text-gray-600"
                            size={24}
                          />
                        )}
                      </div>

                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          module.difficulty_level === 'beginner'
                            ? 'bg-green-100 text-green-700'
                            : module.difficulty_level === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {t(`difficulty.${module.difficulty_level}`) ||
                          t(module.difficulty_level)}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2">
                      {getMultilingual(module.title)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {getMultilingual(module.description)}
                    </p>

                    {progress && !isCompleted && progress.quiz_attempts > 0 && (
                      <div className="mb-3 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                        {t('quizAttempts') || 'Quiz attempts'}:{' '}
                        {progress.quiz_attempts}{' '}
                        | {t('lastScore') || 'Last score'}:{' '}
                        {progress.score}%
                      </div>
                    )}

                    <button
                      onClick={() => handleStartModule(module)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle size={18} />
                          {t('review') || 'Review'}
                        </>
                      ) : (
                        <>
                          <Play size={18} />
                          {t('startLearning')}
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ModuleContent({ module, onComplete, onBack }) {
  const { t, getMultilingual } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);

  const content = getMultilingual(module.content);
  const sections =
    typeof content === 'object' && content.sections ? content.sections : [];

  const hasQuiz = module.quiz_questions && module.quiz_questions.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="p-6 border-b">
        <button
          onClick={onBack}
          className="text-emerald-600 hover:text-emerald-700 mb-4"
        >
          ← {t('backToModules') || 'Back to Modules'}
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {getMultilingual(module.title)}
        </h1>
        <p className="text-gray-600">
          {getMultilingual(module.description)}
        </p>
        {hasQuiz && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2">
            <Trophy className="text-blue-600" size={20} />
            <span className="text-sm text-blue-800">
              {t('quizAvailable') ||
                'Quiz available after completing this module'}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {sections.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {sections[currentSection]?.title ||
                  `${t('section') || 'Section'} ${currentSection + 1}`}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {sections[currentSection]?.content ||
                  t('contentComingSoon') ||
                  'Content coming soon...'}
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
              <button
                onClick={() =>
                  setCurrentSection(Math.max(0, currentSection - 1))
                }
                disabled={currentSection === 0}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('previous') || 'Previous'}
              </button>

              <div className="text-sm text-gray-500">
                {currentSection + 1} / {sections.length}
              </div>

              {currentSection < sections.length - 1 ? (
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  {t('next') || 'Next'}
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2"
                >
                  <Trophy size={18} />
                  {hasQuiz
                    ? t('takeQuiz') || 'Take Quiz'
                    : t('completeModule') || 'Complete Module'}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">
              {t('contentComingSoon') ||
                'Content for this module is coming soon!'}
            </p>
            <button
              onClick={onComplete}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              {hasQuiz
                ? t('takeQuiz') || 'Take Quiz'
                : t('markAsComplete') || 'Mark as Complete'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
