// src/contexts/LanguageContext.jsx
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

// Enhanced translations
const translations = {
  en: {
    // App
    appName: 'ArthSakhi',
    tagline: 'Your Financial Literacy Companion',
    welcomeBack: 'Welcome Back!',
    
    // Navigation
    dashboard: 'Dashboard',
    learning: 'Learning',
    chat: 'Chat',
    schemes: 'Schemes',
    community: 'Community',
    signOut: 'Sign Out',
    user: 'User',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    alreadyHaveAccount: 'Already have an account? Sign in',
    dontHaveAccount: "Don't have an account? Sign up",
    passwordsDoNotMatch: 'Passwords do not match',
    somethingWentWrong: 'Something went wrong',
    loading: 'Loading...',
    
    // Dashboard
    dashboardSubtitle: 'Continue your journey towards financial empowerment',
    completedModules: 'Completed Modules',
    badges: 'Badges',
    currentStreak: 'Current Streak',
    days: 'days',
    progress: 'Progress',
    startLearning: 'Start Learning',
    startLearningSubtitle: 'Explore bite-sized lessons on financial topics',
    exploreModules: 'Explore Modules',
    quickActions: 'Quick Actions',
    viewSchemes: 'View Schemes',
    yourProgress: 'Your Progress',
    startYourJourney: 'Start Your Journey',
    continueJourney: 'Continue Learning',
    noModulesAvailable: 'No learning modules available yet',
    noModulesYet: 'No Modules Yet',
    chatDescription: 'Get personalized financial advice',
    schemesDescription: 'Discover government benefits',
    communityDescription: 'Share and learn together',
    recentActivity: 'Recent Activity',
    moduleCompleted: 'Module Completed',
    score: 'Score',
    completed: 'Completed',
    keepGoing: 'Keep Going!',
    motivationalMessage: 'You\'re making great progress! Keep learning.',
    congratulations: 'Congratulations!',
    allModulesCompleted: 'You\'ve completed all modules! You\'re a champion!',
    
    // Learning
    learningSubtitle: 'Explore bite-sized lessons designed for your financial journey',
    review: 'Review',
    backToModules: 'Back to Modules',
    backToContent: 'Back to Content',
    section: 'Section',
    contentComingSoon: 'Content coming soon...',
    previous: 'Previous',
    next: 'Next',
    completeModule: 'Complete Module',
    markAsComplete: 'Mark as Complete',
    takeQuiz: 'Take Quiz',
    quizAvailable: 'Quiz available after completing this module',
    quizAttempts: 'Quiz attempts',
    lastScore: 'Last score',
    
    // Quiz
    moduleQuiz: 'Module Quiz',
    submitQuiz: 'Submit Quiz',
    quizPassed: 'Congratulations! 🎉',
    yourScore: 'Your Score',
    quizPassedMessage: 'You have successfully completed this module!',
    quizNotPassed: 'Almost There!',
    quizNotPassedMessage: 'You need more points to pass. Review the content and try again!',
    retryQuiz: 'Retry Quiz',
    reviewAnswers: 'Review Your Answers',
    yourAnswer: 'Your answer',
    correctAnswer: 'Correct answer',
    
    // Difficulty
    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',
    
    // Categories
    'category.all': 'All',
    'category.budgeting': 'Budgeting',
    'category.saving': 'Saving',
    'category.digitalPayments': 'Digital Payments',
    'category.loans': 'Loans',
    'category.insurance': 'Insurance',
    'category.investing': 'Investing',
    'category.banking': 'Banking',
    'category.pension': 'Pension',
    'category.housing': 'Housing',
    'category.general': 'General',
    'category.success_story': 'Success Story',
    'category.question': 'Question',
    'category.advice': 'Advice',
    
    // Occupation
    'occupation.homemaker': 'Homemaker',
    'occupation.student': 'Student',
    'occupation.self_employed': 'Self Employed',
    'occupation.salaried': 'Salaried',
    'occupation.farmer': 'Farmer',
    'occupation.business_owner': 'Business Owner',
    'occupation.retired': 'Retired',
    'occupation.seeking_employment': 'Seeking Employment',
    'occupation.other': 'Other',
    
    // Goals
    'goal.saving_emergency_fund': 'Saving Emergency Fund',
    'goal.buying_house': 'Buying a House',
    'goal.childrens_education': "Children's Education",
    'goal.retirement_planning': 'Retirement Planning',
    'goal.starting_business': 'Starting a Business',
    'goal.reducing_debt': 'Reducing Debt',
    'goal.learning_investing': 'Learning to Invest',
    'goal.building_credit': 'Building Credit',
    
    // Chatbot
    talkToArthSakhi: 'Talk to ArthSakhi',
    chatbotDescription: 'Get personalized financial guidance, answers to your money questions, and tips on budgeting, saving, investments, and more.',
    openFinancialChatbot: 'Open Financial Chatbot',
    opensInNewWindow: 'Opens in a new window',
    
    // Community
    communitySubtitle: 'Share your journey, learn from others, and build financial confidence together',
    shareStory: 'Share Your Story',
    cancel: 'Cancel',
    createNewPost: 'Create New Post',
    title: 'Title',
    category: 'Category',
    content: 'Content',
    post: 'Post',
    noPostsYet: 'No posts yet',
    beFirstToShareStory: 'Be the first to share your story!',
    comments: 'Comments',
    addCommentPlaceholder: 'Add a comment...',
    
    // Schemes
    governmentSchemes: 'Government Schemes',
    schemesSubtitle: 'Discover financial schemes and benefits available to you',
    searchSchemes: 'Search schemes...',
    noSchemesFound: 'No schemes found matching your criteria',
    description: 'Description',
    eligibility: 'Eligibility',
    keyBenefits: 'Key Benefits',
    visitOfficialWebsite: 'Visit Official Website',
    
    // Onboarding
    welcomeToArthSakhi: 'Welcome to ArthSakhi!',
    onboardingSubtitle: "Let's personalize your financial journey",
    selectLanguage: 'Select Your Preferred Language',
    tellUsAboutYou: 'Tell Us About You',
    homeState: 'Home State',
    selectState: 'Select your state',
    occupation: 'Occupation',
    selectOccupation: 'Select your occupation',
    monthlyIncomeRange: 'Monthly Income Range',
    selectRange: 'Select range',
    financialGoals: 'What Are Your Financial Goals?',
    selectAllThatApply: 'Select all that apply',
    back: 'Back',
    getStarted: 'Get Started',
    saving: 'Saving...',
  },
  
  hi: {
    // App
    appName: 'अर्थसखी',
    tagline: 'आपकी वित्तीय साक्षरता साथी',
    welcomeBack: 'वापसी पर स्वागत है!',
    
    // Navigation
    dashboard: 'डैशबोर्ड',
    learning: 'सीखना',
    chat: 'चैट',
    schemes: 'योजनाएं',
    community: 'समुदाय',
    signOut: 'साइन आउट',
    user: 'उपयोगकर्ता',
    
    // Dashboard
    dashboardSubtitle: 'वित्तीय सशक्तिकरण की ओर अपनी यात्रा जारी रखें',
    completedModules: 'पूर्ण मॉड्यूल',
    badges: 'बैज',
    currentStreak: 'वर्तमान स्ट्रीक',
    days: 'दिन',
    progress: 'प्रगति',
    startLearning: 'सीखना शुरू करें',
    startLearningSubtitle: 'वित्तीय विषयों पर संक्षिप्त पाठ देखें',
    exploreModules: 'मॉड्यूल देखें',
    quickActions: 'त्वरित क्रियाएं',
    viewSchemes: 'योजनाएं देखें',
    yourProgress: 'आपकी प्रगति',
    startYourJourney: 'अपनी यात्रा शुरू करें',
    continueJourney: 'सीखना जारी रखें',
    noModulesAvailable: 'अभी तक कोई सीखने के मॉड्यूल उपलब्ध नहीं हैं',
    noModulesYet: 'अभी कोई मॉड्यूल नहीं',
    chatDescription: 'व्यक्तिगत वित्तीय सलाह प्राप्त करें',
    schemesDescription: 'सरकारी लाभों की खोज करें',
    communityDescription: 'साझा करें और एक साथ सीखें',
    recentActivity: 'हाल की गतिविधि',
    moduleCompleted: 'मॉड्यूल पूर्ण',
    score: 'स्कोर',
    completed: 'पूर्ण',
    keepGoing: 'आगे बढ़ते रहें!',
    motivationalMessage: 'आप बहुत अच्छी प्रगति कर रहे हैं! सीखते रहें।',
    congratulations: 'बधाई हो!',
    allModulesCompleted: 'आपने सभी मॉड्यूल पूरे कर लिए हैं! आप चैंपियन हैं!',
    
    // Learning
    learningSubtitle: 'अपनी वित्तीय यात्रा के लिए डिज़ाइन किए गए संक्षिप्त पाठ देखें',
    review: 'समीक्षा करें',
    backToModules: 'मॉड्यूल पर वापस जाएं',
    backToContent: 'सामग्री पर वापस जाएं',
    section: 'अनुभाग',
    contentComingSoon: 'सामग्री जल्द आ रही है...',
    previous: 'पिछला',
    next: 'अगला',
    completeModule: 'मॉड्यूल पूर्ण करें',
    markAsComplete: 'पूर्ण के रूप में चिह्नित करें',
    takeQuiz: 'क्विज़ लें',
    quizAvailable: 'यह मॉड्यूल पूरा करने के बाद क्विज़ उपलब्ध',
    quizAttempts: 'क्विज़ प्रयास',
    lastScore: 'अंतिम स्कोर',
    
    // Quiz
    moduleQuiz: 'मॉड्यूल क्विज़',
    submitQuiz: 'क्विज़ जमा करें',
    quizPassed: 'बधाई हो! 🎉',
    yourScore: 'आपका स्कोर',
    quizPassedMessage: 'आपने इस मॉड्यूल को सफलतापूर्वक पूरा कर लिया है!',
    quizNotPassed: 'लगभग हो गया!',
    quizNotPassedMessage: 'पास करने के लिए आपको अधिक अंक चाहिए। सामग्री की समीक्षा करें और पुनः प्रयास करें!',
    retryQuiz: 'क्विज़ पुनः प्रयास करें',
    reviewAnswers: 'अपने उत्तरों की समीक्षा करें',
    yourAnswer: 'आपका उत्तर',
    correctAnswer: 'सही उत्तर',
    
    // Difficulty
    'difficulty.beginner': 'शुरुआती',
    'difficulty.intermediate': 'मध्यवर्ती',
    'difficulty.advanced': 'उन्नत',
    
    // Categories
    'category.all': 'सभी',
    'category.budgeting': 'बजट बनाना',
    'category.saving': 'बचत',
    'category.digitalPayments': 'डिजिटल भुगतान',
    'category.loans': 'ऋण',
    'category.insurance': 'बीमा',
    'category.investing': 'निवेश',
    'category.banking': 'बैंकिंग',
    'category.pension': 'पेंशन',
    'category.housing': 'आवास',
    'category.general': 'सामान्य',
    
    // Community
    communitySubtitle: 'अपनी यात्रा साझा करें, दूसरों से सीखें और वित्तीय आत्मविश्वास बनाएं',
    shareStory: 'अपनी कहानी साझा करें',
    cancel: 'रद्द करें',
    createNewPost: 'नई पोस्ट बनाएं',
    title: 'शीर्षक',
    category: 'श्रेणी',
    content: 'सामग्री',
    post: 'पोस्ट करें',
    noPostsYet: 'अभी तक कोई पोस्ट नहीं',
    beFirstToShareStory: 'अपनी कहानी साझा करने वाले पहले व्यक्ति बनें!',
    comments: 'टिप्पणियाँ',
    addCommentPlaceholder: 'एक टिप्पणी जोड़ें...',
    
    // Schemes
    governmentSchemes: 'सरकारी योजनाएं',
    schemesSubtitle: 'आपके लिए उपलब्ध वित्तीय योजनाओं और लाभों की खोज करें',
    searchSchemes: 'योजनाएं खोजें...',
    noSchemesFound: 'आपके मानदंडों से मेल खाने वाली कोई योजना नहीं मिली',
    description: 'विवरण',
    eligibility: 'पात्रता',
    keyBenefits: 'मुख्य लाभ',
    visitOfficialWebsite: 'आधिकारिक वेबसाइट पर जाएं',
    
    // Onboarding
    welcomeToArthSakhi: 'अर्थसखी में आपका स्वागत है!',
    onboardingSubtitle: 'आइए अपनी वित्तीय यात्रा को व्यक्तिगत बनाएं',
    selectLanguage: 'अपनी पसंदीदा भाषा चुनें',
    tellUsAboutYou: 'हमें अपने बारे में बताएं',
    homeState: 'गृह राज्य',
    selectState: 'अपना राज्य चुनें',
    occupation: 'व्यवसाय',
    selectOccupation: 'अपना व्यवसाय चुनें',
    monthlyIncomeRange: 'मासिक आय सीमा',
    selectRange: 'सीमा चुनें',
    financialGoals: 'आपके वित्तीय लक्ष्य क्या हैं?',
    selectAllThatApply: 'लागू होने वाले सभी का चयन करें',
    back: 'वापस',
    getStarted: 'शुरू करें',
    saving: 'सहेजा जा रहा है...',
  },
  
  mr: {
    appName: 'अर्थसखी',
    tagline: 'तुमचा आर्थिक साक्षरता साथी',
    welcomeBack: 'पुन्हा स्वागत आहे!',
    dashboard: 'डॅशबोर्ड',
    learning: 'शिक्षण',
    chat: 'चॅट',
    schemes: 'योजना',
    community: 'समुदाय',
    signOut: 'साइन आउट',
    startLearning: 'शिकायला सुरुवात करा',
    completedModules: 'पूर्ण मॉड्यूल',
    badges: 'बॅज',
    currentStreak: 'सध्याची स्ट्रीक',
    days: 'दिवस',
    progress: 'प्रगती',
  },
  
  ta: {
    appName: 'அர்த்சகி',
    tagline: 'உங்கள் நிதி எழுத்தறிவு துணை',
    welcomeBack: 'மீண்டும் வரவேற்கிறோம்!',
    dashboard: 'கட்டுப்பாட்டு பலகை',
    learning: 'கற்றல்',
    chat: 'அரட்டை',
    schemes: 'திட்டங்கள்',
    community: 'சமூகம்',
    signOut: 'வெளியேறு',
    startLearning: 'கற்றல் தொடங்கு',
    completedModules: 'முடிக்கப்பட்ட தொகுதிகள்',
    badges: 'பதக்கங்கள்',
    currentStreak: 'தற்போதைய வரிசை',
    days: 'நாட்கள்',
    progress: 'முன்னேற்றம்',
  },
  
  bn: {
    appName: 'অর্থসখী',
    tagline: 'আপনার আর্থিক সাক্ষরতা সঙ্গী',
    welcomeBack: 'আবার স্বাগতম!',
    dashboard: 'ড্যাশবোর্ড',
    learning: 'শেখা',
    chat: 'চ্যাট',
    schemes: 'প্রকল্প',
    community: 'সম্প্রদায়',
    signOut: 'সাইন আউট',
    startLearning: 'শেখা শুরু করুন',
    completedModules: 'সম্পূর্ণ মডিউল',
    badges: 'ব্যাজ',
    currentStreak: 'বর্তমান ধারা',
    days: 'দিন',
    progress: 'অগ্রগতি',
  },
  
  kn: {
    appName: 'ಅರ್ಥಸಖಿ',
    tagline: 'ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ ಸಂಗಾತಿ',
    welcomeBack: 'ಮತ್ತೆ ಸ್ವಾಗತ!',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    learning: 'ಕಲಿಕೆ',
    chat: 'ಚಾಟ್',
    schemes: 'ಯೋಜನೆಗಳು',
    community: 'ಸಮುದಾಯ',
    signOut: 'ಸೈನ್ ಔಟ್',
    startLearning: 'ಕಲಿಕೆ ಪ್ರಾರಂಭಿಸಿ',
    completedModules: 'ಪೂರ್ಣಗೊಂಡ ಮಾಡ್ಯೂಲ್‌ಗಳು',
    badges: 'ಬ್ಯಾಡ್ಜ್‌ಗಳು',
    currentStreak: 'ಪ್ರಸ್ತುತ ಸರಣಿ',
    days: 'ದಿನಗಳು',
    progress: 'ಪ್ರಗತಿ',
  },
};

export function LanguageProvider({ children }) {
  const { profile } = useAuth(); // CHANGED: Now depends on profile
  const [language, setLanguageState] = useState('en');

  // CHANGED: Load language from profile when it's available
  useEffect(() => {
    if (profile?.preferred_language) {
      console.log('🌐 Language: Setting from profile:', profile.preferred_language);
      setLanguageState(profile.preferred_language);
    } else {
      // Fallback to default 'en' when no profile
      setLanguageState('en');
    }
  }, [profile?.preferred_language]);

  const setLanguage = (lang) => {
    console.log('🌐 Language: Changing to', lang);
    setLanguageState(lang);
    // NOTE: We don't save to localStorage anymore - it's saved in the profile
  };

  const t = (key) => {
    const translation = translations[language]?.[key] || translations.en[key] || key;
    return translation;
  };

  const getMultilingual = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj.en || '';
  };

  const value = {
    language,
    setLanguage,
    t,
    getMultilingual,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}