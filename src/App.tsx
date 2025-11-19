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
  const { user, profile, loading } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    if (profile && !localStorage.getItem(`tutorial_shown_${profile.id}`)) {
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
    if (profile) {
      localStorage.setItem(`tutorial_shown_${profile.id}`, 'true');
    }
    setShowTutorial(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  if (!profile) {
    return <Onboarding onComplete={() => {}} />;
  }

  return (
    <>
      {showTutorial && <Tutorial onComplete={handleTutorialComplete} />}
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
        {currentView === 'learning' && <LearningModules selectedModuleId={selectedModuleId} />}
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
