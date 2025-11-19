import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Award, Flame, BookOpen, TrendingUp, MessageCircle, FileText } from 'lucide-react';

export default function Dashboard({ onNavigate }) {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    completedModules: 0,
    totalModules: 0,
    badges: 0,
    currentStreak: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, [profile]);

  const loadDashboardData = async () => {
    if (!profile) return;

    try {
      const [progressRes, badgesRes, streakRes] = await Promise.all([
        supabase
          .from('user_progress')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.id)
          .eq('completed', true),
        supabase
          .from('user_badges')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.id),
        supabase
          .from('streaks')
          .select('*')
          .eq('user_id', profile.id)
          .maybeSingle(),
      ]);

      const totalModulesRes = await supabase
        .from('learning_modules')
        .select('id', { count: 'exact', head: true });

      setStats({
        completedModules: progressRes.count || 0,
        totalModules: totalModulesRes.count || 0,
        badges: badgesRes.count || 0,
        currentStreak: streakRes.data?.current_streak || 0,
      });
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

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back!
        </h1>
        <p className="text-emerald-50">
          Continue your journey towards financial empowerment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={<BookOpen />}
          title={t('completedModules')}
          value={`${stats.completedModules}/${stats.totalModules}`}
          color="bg-blue-500"
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
          title="Progress"
          value={stats.totalModules > 0 ? `${Math.round((stats.completedModules / stats.totalModules) * 100)}%` : '0%'}
          color="bg-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="text-emerald-600" />
            {t('startLearning')}
          </h2>
          <p className="text-gray-600 mb-4">Explore bite-sized lessons on financial topics</p>
          <button
            onClick={() => onNavigate('learning')}
            className="w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors"
          >
            Explore Modules
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <ActionButton
              icon={<MessageCircle />}
              text={t('chat')}
              onClick={() => onNavigate('chat')}
              color="bg-blue-50 text-blue-700 hover:bg-blue-100"
            />
            <ActionButton
              icon={<FileText />}
              text={t('viewSchemes')}
              onClick={() => onNavigate('schemes')}
              color="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            />
            <ActionButton
              icon={<MessageCircle />}
              text={t('community')}
              onClick={() => onNavigate('community')}
              color="bg-purple-50 text-purple-700 hover:bg-purple-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-3`}>
        {icon}
      </div>
      <p className="text-gray-600 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

function ActionButton({ icon, text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all ${color}`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}
