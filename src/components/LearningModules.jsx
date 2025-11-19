import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { BookOpen, CheckCircle, Play, Award } from 'lucide-react';

export default function LearningModules({ selectedModuleId }) {
  const { profile } = useAuth();
  const { t, getMultilingual } = useLanguage();
  const [modules, setModules] = useState([]);
  const [userProgress, setUserProgress] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    loadModules();
  }, [profile]);

  useEffect(() => {
    if (selectedModuleId && modules.length > 0) {
      const module = modules.find(m => m.id === selectedModuleId);
      if (module) {
        setSelectedModule(module);
        setShowContent(true);
      }
    }
  }, [selectedModuleId, modules]);

  const loadModules = async () => {
    if (!profile) return;

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

      setModules(modulesRes.data || []);
      setUserProgress(progressRes.data || []);
    } catch (error) {
      console.error('Error loading modules:', error);
    } finally {
      setLoading(false);
    }
  };

  const getModuleProgress = (moduleId) => {
    return userProgress.find(p => p.module_id === moduleId);
  };

  const handleStartModule = (module) => {
    setSelectedModule(module);
    setShowContent(true);
  };

  const handleCompleteModule = async () => {
    if (!selectedModule || !profile) return;

    try {
      const progress = getModuleProgress(selectedModule.id);

      if (progress) {
        await supabase
          .from('user_progress')
          .update({
            completed: true,
            completed_at: new Date().toISOString(),
            score: 100,
          })
          .eq('id', progress.id);
      } else {
        await supabase
          .from('user_progress')
          .insert({
            user_id: profile.id,
            module_id: selectedModule.id,
            completed: true,
            completed_at: new Date().toISOString(),
            score: 100,
          });
      }

      await updateStreak();
      await loadModules();
      setShowContent(false);
      setSelectedModule(null);
    } catch (error) {
      console.error('Error completing module:', error);
    }
  };

  const updateStreak = async () => {
    if (!profile) return;

    try {
      const { data: streakData } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', profile.id)
        .maybeSingle();

      const today = new Date().toISOString().split('T')[0];

      if (streakData) {
        const lastDate = streakData.last_activity_date;
        const daysDiff = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));

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
        await supabase
          .from('streaks')
          .insert({
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

  if (showContent && selectedModule) {
    return (
      <ModuleContent
        module={selectedModule}
        onComplete={handleCompleteModule}
        onBack={() => {
          setShowContent(false);
          setSelectedModule(null);
        }}
      />
    );
  }

  const categories = [...new Set(modules.map(m => m.category))];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('learning')}</h1>
        <p className="text-gray-600">
          Explore bite-sized lessons designed for your financial journey
        </p>
      </div>

      {categories.map((category) => {
        const categoryModules = modules.filter(m => m.category === category);

        return (
          <div key={category} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryModules.map((module) => {
                const progress = getModuleProgress(module.id);
                const isCompleted = progress?.completed;

                return (
                  <div
                    key={module.id}
                    className={`border-2 rounded-xl p-5 transition-all ${
                      isCompleted
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${
                        isCompleted ? 'bg-emerald-600' : 'bg-gray-100'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="text-white" size={24} />
                        ) : (
                          <BookOpen className="text-gray-600" size={24} />
                        )}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        module.difficulty_level === 'beginner'
                          ? 'bg-green-100 text-green-700'
                          : module.difficulty_level === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {t(module.difficulty_level)}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2">
                      {getMultilingual(module.title)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {getMultilingual(module.description)}
                    </p>

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
                          Review
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
  const { getMultilingual } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);

  const content = getMultilingual(module.content);
  const sections = typeof content === 'object' && content.sections ? content.sections : [];

  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="p-6 border-b">
        <button
          onClick={onBack}
          className="text-emerald-600 hover:text-emerald-700 mb-4"
        >
          ← Back to Modules
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {getMultilingual(module.title)}
        </h1>
        <p className="text-gray-600">
          {getMultilingual(module.description)}
        </p>
      </div>

      <div className="p-6">
        {sections.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {sections[currentSection]?.title || `Section ${currentSection + 1}`}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {sections[currentSection]?.content || 'Content coming soon...'}
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="text-sm text-gray-500">
                {currentSection + 1} / {sections.length}
              </div>

              {currentSection < sections.length - 1 ? (
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2"
                >
                  <Award size={18} />
                  Complete Module
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Content for this module is coming soon!</p>
            <button
              onClick={onComplete}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Mark as Complete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
