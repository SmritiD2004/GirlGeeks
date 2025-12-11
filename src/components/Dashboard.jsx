// src/components/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import {
  Award,
  Flame,
  BookOpen,
  TrendingUp,
  MessageCircle,
  FileText,
  Trophy,
} from 'lucide-react';

export default function Dashboard({ onNavigate }) {
  const { profile } = useAuth();
  const { t, getMultilingual } = useLanguage();
  const [stats, setStats] = useState({
    completedModules: 0,
    totalModules: 0,
    badges: 0,
    currentStreak: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, [profile]);

  const loadDashboardData = async () => {
    if (!profile) return;

    try {
      const [progressRes, badgesRes, streakRes, totalModulesRes, recentProgressRes] = await Promise.all([
        // Count completed modules
        supabase
          .from('user_progress')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.id)
          .eq('completed', true),
        // Count badges
        supabase
          .from('user_badges')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.id),
        // Get streak data
        supabase
          .from('streaks')
          .select('*')
          .eq('user_id', profile.id)
          .maybeSingle(),
        // Count total modules available
        supabase
          .from('learning_modules')
          .select('id', { count: 'exact', head: true }),
        // Get recent completed modules
        supabase
          .from('user_progress')
          .select(`
            *,
            learning_modules (
              title,
              category
            )
          `)
          .eq('user_id', profile.id)
          .eq('completed', true)
          .order('completed_at', { ascending: false })
          .limit(3),
      ]);

      console.log('📊 Dashboard: Total modules:', totalModulesRes.count);
      console.log('📊 Dashboard: Completed:', progressRes.count);

      setStats({
        completedModules: progressRes.count || 0,
        totalModules: totalModulesRes.count || 0,
        badges: badgesRes.count || 0,
        currentStreak: streakRes.data?.current_streak || 0,
      });

      setRecentActivity(recentProgressRes.data || []);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const progressPercent =
    stats.totalModules > 0
      ? Math.round((stats.completedModules / stats.totalModules) * 100)
      : 0;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          {t('welcomeBack') || 'Welcome back!'}
        </h1>
        <p className="text-emerald-50">
          {t('dashboardSubtitle') ||
            'Continue your journey towards financial empowerment'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 transition-transform duration-300">
        <StatCard
          icon={<BookOpen />}
          title={t('completedModules')}
          value={`${stats.completedModules}/${stats.totalModules}`}
          color="bg-blue-500"
          subtitle={stats.totalModules === 0 ? t('noModulesYet') || 'No modules available yet' : null}
        />
        <StatCard
          icon={<Award />}
          title={t('badges')}
          value={stats.badges}
          color="bg-yellow-500"
        />
        <StatCard
          icon={<Flame />}
          title={t('currentStreak')}
          value={`${stats.currentStreak} ${t('days')}`}
          color="bg-orange-500"
        />
        <StatCard
          icon={<TrendingUp />}
          title={t('progress') || 'Progress'}
          value={`${progressPercent}%`}
          color="bg-emerald-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Learning Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="text-emerald-600" />
            {t('startLearning')}
          </h2>
          <p className="text-gray-600 mb-4">
            {t('startLearningSubtitle') ||
              'Explore bite-sized lessons on financial topics'}
          </p>
          
          {stats.totalModules > 0 ? (
            <>
              <div className="mb-4 bg-gray-100 rounded-lg p-3">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{t('yourProgress') || 'Your Progress'}</span>
                  <span className="font-semibold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              
              <button
                onClick={() => onNavigate('learning')}
                className="w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors"
              >
                {stats.completedModules === 0 
                  ? t('startYourJourney') || 'Start Your Journey'
                  : t('continueJourney') || 'Continue Learning'}
              </button>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500 text-sm mb-4">
                {t('noModulesAvailable') || 'No learning modules available yet. Use the seeder below to add sample modules.'}
              </p>
              <button
                onClick={() => onNavigate('learning')}
                className="w-full px-4 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-medium"
                disabled
              >
                {t('noModulesYet') || 'No Modules Yet'}
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t('quickActions') || 'Quick Actions'}
          </h2>
          <div className="space-y-3">
            <ActionButton
              icon={<MessageCircle />}
              text={t('chat')}
              description={t('chatDescription') || 'Get personalized financial advice'}
              onClick={() => onNavigate('chat')}
              color="bg-blue-50 text-blue-700 hover:bg-blue-100"
            />
            <ActionButton
              icon={<FileText />}
              text={t('viewSchemes')}
              description={t('schemesDescription') || 'Discover government benefits'}
              onClick={() => onNavigate('schemes')}
              color="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            />
            <ActionButton
              icon={<MessageCircle />}
              text={t('community')}
              description={t('communityDescription') || 'Share and learn together'}
              onClick={() => onNavigate('community')}
              color="bg-purple-50 text-purple-700 hover:bg-purple-100"
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Trophy className="text-emerald-600" />
            {t('recentActivity') || 'Recent Activity'}
          </h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg"
              >
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
  {getMultilingual(activity.learning_modules?.title) || t('moduleCompleted')}
</p>
                  <p className="text-sm text-gray-600">
                    {t('score') || 'Score'}: {activity.score}% • {new Date(activity.completed_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-emerald-600 font-semibold">
                  ✓ {t('completed') || 'Completed'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Motivational Banner */}
      {stats.completedModules > 0 && stats.completedModules < stats.totalModules && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold mb-1">
                {t('keepGoing') || 'Keep Going!'}
              </h3>
              <p className="text-purple-100">
                {t('motivationalMessage') || `You've completed ${stats.completedModules} of ${stats.totalModules} modules. You're making great progress!`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* All Modules Completed Celebration */}
      {stats.completedModules > 0 && stats.completedModules === stats.totalModules && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
          <div className="text-center">
            <div className="text-6xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold mb-2">
              {t('congratulations') || 'Congratulations!'}
            </h3>
            <p className="text-yellow-100">
              {t('allModulesCompleted') || `You've completed all ${stats.totalModules} modules! You're a financial literacy champion!`}
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
}

function StatCard({ icon, title, value, color, subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div
        className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-3`}
      >
        {icon}
      </div>
      <p className="text-gray-600 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      {subtitle && (
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
}

function ActionButton({ icon, text, description, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-3 p-4 rounded-lg transition-all ${color}`}
    >
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="text-left">
        <div className="font-medium">{text}</div>
        {description && (
          <div className="text-xs opacity-75 mt-1">{description}</div>
        )}
      </div>
    </button>
  );
}

function CheckCircle({ className, size }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}