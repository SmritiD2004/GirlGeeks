// src/components/Navigation.jsx - UPDATED VERSION
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  FileText,
  Users,
  LogOut,
  Sparkles,
} from 'lucide-react';

export default function Navigation({ currentView, onNavigate }) {
  const { signOut, profile } = useAuth();
  const { t } = useLanguage();

  const handleSignOut = async () => {
    // Don't clear language preference on logout
    const savedLanguage = localStorage.getItem('preferred_language');
    await signOut();
    // Restore language after signout (handled in AuthContext now)
  };

  const navItems = [
    { id: 'dashboard', label: t('dashboard'), icon: LayoutDashboard },
    { id: 'learning', label: t('learning'), icon: BookOpen },
    { id: 'chat', label: t('chat'), icon: MessageCircle },
    { id: 'schemes', label: t('schemes'), icon: FileText },
    { id: 'community', label: t('community'), icon: Users },
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="text-emerald-600" size={28} />
            <span className="text-xl font-bold text-gray-800">
              {t('appName')}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentView === item.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-800">
                {profile?.occupation
                  ? t(`occupation.${profile.occupation}`) || profile.occupation.replace(/_/g, ' ')
                  : t('user') || 'User'}
              </p>
              <p className="text-xs text-gray-500">{profile?.home_state}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title={t('signOut')}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-1 pb-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
                  currentView === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}