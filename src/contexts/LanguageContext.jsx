import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const LanguageContext = createContext({});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { profile } = useAuth();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    if (profile?.preferred_language) {
      setCurrentLanguage(profile.preferred_language);
    }
  }, [profile]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const t = (key, lang = currentLanguage) => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  const getMultilingual = (jsonbField, lang = currentLanguage) => {
    if (!jsonbField) return '';
    if (typeof jsonbField === 'string') return jsonbField;
    return jsonbField[lang] || jsonbField['en'] || Object.values(jsonbField)[0] || '';
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getMultilingual,
    languages: [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'हिंदी' },
      { code: 'mr', name: 'मराठी' },
      { code: 'ta', name: 'தமிழ்' },
      { code: 'bn', name: 'বাংলা' },
    ],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const translations = {
  en: {
    appName: 'ArthSakhi',
    tagline: 'Your Financial Companion',
    welcome: 'Welcome to ArthSakhi',
    welcomeMessage: 'Empowering women through financial literacy',
    getStarted: 'Get Started',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signOut: 'Sign Out',
    profile: 'Profile',
    dashboard: 'Dashboard',
    learning: 'Learning',
    schemes: 'Schemes',
    community: 'Community',
    chat: 'Chat',
    progress: 'Progress',
    badges: 'Badges',
    streaks: 'Streaks',
    onboarding: 'Let\'s Get to Know You',
    age: 'Age',
    occupation: 'Occupation',
    financialGoals: 'Financial Goals',
    literacyLevel: 'Literacy Level',
    homeState: 'Home State',
    language: 'Language',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    save: 'Save',
    cancel: 'Cancel',
    continue: 'Continue',
    completedModules: 'Completed Modules',
    badgesCount: 'Badges',
    currentStreak: 'Current Streak',
    longestStreak: 'Longest Streak',
    days: 'days',
    startLearning: 'Start Learning',
    moduleCompleted: 'Module Completed!',
    askQuestion: 'Ask a question...',
    send: 'Send',
    viewSchemes: 'View Schemes',
    eligibility: 'Eligibility',
    howToApply: 'How to Apply',
    contactInfo: 'Contact Information',
    shareStory: 'Share Your Story',
    viewDiscussions: 'View Discussions',
    post: 'Post',
    reply: 'Reply',
    likes: 'Likes',
    comments: 'Comments',
    tutorialWelcome: 'Welcome! Let\'s take a quick tour',
    tutorialNext: 'Next',
    tutorialPrevious: 'Previous',
    tutorialFinish: 'Finish',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  },
  hi: {
    appName: 'अर्थसखी',
    tagline: 'आपकी वित्तीय साथी',
    welcome: 'अर्थसखी में स्वागत है',
    welcomeMessage: 'वित्तीय साक्षरता के माध्यम से महिलाओं को सशक्त बनाना',
    getStarted: 'शुरू करें',
    signIn: 'साइन इन करें',
    signUp: 'साइन अप करें',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    signOut: 'साइन आउट',
    dashboard: 'डैशबोर्ड',
    learning: 'सीखना',
    schemes: 'योजनाएं',
    community: 'समुदाय',
    chat: 'चैट',
    progress: 'प्रगति',
    onboarding: 'आइए आपको जानते हैं',
    age: 'आयु',
    occupation: 'व्यवसाय',
    financialGoals: 'वित्तीय लक्ष्य',
    literacyLevel: 'साक्षरता स्तर',
    homeState: 'गृह राज्य',
    language: 'भाषा',
    next: 'अगला',
    previous: 'पिछला',
    submit: 'जमा करें',
    eligibility: 'पात्रता',
    howToApply: 'आवेदन कैसे करें',
    contactInfo: 'संपर्क जानकारी',
    startLearning: 'सीखना शुरू करें',
    askQuestion: 'एक सवाल पूछें...',
    send: 'भेजें',
  },
  mr: {
    appName: 'अर्थसखी',
    tagline: 'तुमची आर्थिक साथी',
    welcome: 'अर्थसखी मध्ये आपले स्वागत',
    welcomeMessage: 'आर्थिक साक्षरतेद्वारे महिलांना सक्षम करणे',
    getStarted: 'सुरू करा',
    signIn: 'साइन इन करा',
    signUp: 'साइन अप करा',
    dashboard: 'डॅशबोर्ड',
    learning: 'शिकणे',
    schemes: 'योजना',
  },
  ta: {
    appName: 'அர்த்சகி',
    welcome: 'அர்த்சகிக்கு வரவேற்கிறோம்',
    getStarted: 'தொடங்குங்கள்',
    dashboard: 'டாஷ்போர்டு',
    learning: 'கற்றல்',
  },
  bn: {
    appName: 'অর্থসখী',
    welcome: 'অর্থসখীতে স্বাগতম',
    getStarted: 'শুরু করুন',
    dashboard: 'ড্যাশবোর্ড',
    learning: 'শেখা',
  },
};
