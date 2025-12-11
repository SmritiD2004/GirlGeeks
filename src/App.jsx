// src/App.jsx - UPDATED VERSION
import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

import Auth from './components/Auth.jsx';
import Onboarding from './components/Onboarding.jsx';
import Dashboard from './components/Dashboard.jsx';
import LearningModules from './components/LearningModules.jsx';
import Chatbot from './components/Chatbot.jsx';
import Schemes from './components/Schemes.jsx';
import Community from './components/Community.jsx';
import Navigation from './components/Navigation.jsx';
import Tutorial from './components/Tutorial.jsx';

function AppContent() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);

  // Reset view when user changes
  useEffect(() => {
    if (user) {
      setCurrentView('dashboard');
      setSelectedModuleId(null);
    }
  }, [user?.id]);

  useEffect(() => {
    if (profile && profile.id && !localStorage.getItem(`tutorial_shown_${profile.id}`)) {
      setShowTutorial(true);
    }
  }, [profile]);

  const handleNavigate = (view, moduleId) => {
    setCurrentView(view);
    if (moduleId) {
      setSelectedModuleId(moduleId);
    }
  };

  const handleTutorialComplete = () => {
    if (profile?.id) {
      localStorage.setItem(`tutorial_shown_${profile.id}`, 'true');
    }
    setShowTutorial(false);
  };

  const handleOnboardingComplete = async () => {
    console.log('🔵 App: Onboarding complete');
    if (refreshProfile) {
      await refreshProfile();
    }
    setCurrentView('dashboard');
  };

  // Loading state - return nothing for instant load (NO SPINNER)
  if (loading) {
    return (
    <div className="flex items-center justify-center h-screen">
      <div>Loading...</div>
    </div>
  );
  }

  // Not authenticated - show auth screen
  if (!user) {
    console.log('🔵 App: Showing auth screen (no user)');
    return <Auth />;
  }

  // Authenticated but no profile - show onboarding
  if (!profile) {
    console.log('🔵 App: Showing onboarding (no profile)');
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Fully authenticated with profile - show main app
  console.log('🔵 App: Showing main app');
  return (
    <>
      {showTutorial && <Tutorial onComplete={handleTutorialComplete} />}
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <Dashboard onNavigate={handleNavigate} />
        )}
        {currentView === 'learning' && (
          <LearningModules selectedModuleId={selectedModuleId} />
        )}
        {currentView === 'chat' && <Chatbot />}
        {currentView === 'schemes' && <Schemes />}
        {currentView === 'community' && <Community />}
      </main>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;