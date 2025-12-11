// src/components/Tutorial.jsx
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Users, 
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const TUTORIAL_STEPS = [
  {
    title: { en: 'Welcome to ArthSakhi!', hi: 'ArthSakhi में आपका स्वागत है!' },
    description: {
      en: 'Your personal financial literacy companion. Let\'s take a quick tour!',
      hi: 'आपका व्यक्तिगत वित्तीय साक्षरता साथी। चलिए एक संक्षिप्त दौरा करते हैं!'
    },
    icon: '🌟',
  },
  {
    title: { en: 'Learning Modules', hi: 'सीखने के मॉड्यूल' },
    description: {
      en: 'Explore bite-sized lessons on budgeting, saving, digital payments, and more. Complete modules to earn badges!',
      hi: 'बजट बनाने, बचत, डिजिटल भुगतान और अधिक पर संक्षिप्त पाठ देखें। मॉड्यूल पूरा करें और बैज जीतें!'
    },
    icon: <BookOpen className="text-emerald-600" size={48} />,
  },
  {
    title: { en: 'AI Chatbot', hi: 'AI चैटबॉट' },
    description: {
      en: 'Ask questions anytime! Our AI assistant is here to help with personalized financial advice.',
      hi: 'कभी भी सवाल पूछें! हमारा AI सहायक व्यक्तिगत वित्तीय सलाह के लिए यहाँ है।'
    },
    icon: <MessageCircle className="text-blue-600" size={48} />,
  },
  {
    title: { en: 'Government Schemes', hi: 'सरकारी योजनाएं' },
    description: {
      en: 'Discover financial schemes and benefits available for you. Learn how to apply and benefit!',
      hi: 'आपके लिए उपलब्ध वित्तीय योजनाएं और लाभ देखें। आवेदन करना और लाभ उठाना सीखें!'
    },
    icon: <FileText className="text-emerald-600" size={48} />,
  },
  {
    title: { en: 'Community', hi: 'समुदाय' },
    description: {
      en: 'Connect with others on similar financial journeys. Share stories and learn together!',
      hi: 'समान वित्तीय यात्रा पर दूसरों से जुड़ें। कहानियां साझा करें और एक साथ सीखें!'
    },
    icon: <Users className="text-purple-600" size={48} />,
  },
];

export default function Tutorial({ onComplete }) {
  const { t, getMultilingual } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < TUTORIAL_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const step = TUTORIAL_STEPS[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in duration-300">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white relative">
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              {typeof step.icon === 'string' ? (
                <div className="text-6xl">{step.icon}</div>
              ) : (
                step.icon
              )}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {getMultilingual(step.title)}
          </h2>
          <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
            {getMultilingual(step.description)}
          </p>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-8">
            {TUTORIAL_STEPS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8 bg-emerald-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              {t('previous') || 'Previous'}
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors"
            >
              {currentStep === TUTORIAL_STEPS.length - 1
                ? t('getStarted') || 'Get Started'
                : t('next') || 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}