import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Tutorial({ onComplete }) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to ArthSakhi!',
      content: 'Your personal financial companion. We are here to help you learn about money management, savings, investments, and government schemes.',
      icon: '👋',
    },
    {
      title: 'Dashboard',
      content: 'Track your learning progress, view completed modules, earned badges, and maintain your learning streak.',
      icon: '📊',
    },
    {
      title: 'Learning Modules',
      content: 'Access bite-sized lessons on budgeting, saving, digital payments, loans, insurance, and more.',
      icon: '📚',
    },
    {
      title: 'Chat with ArthSakhi',
      content: 'Have questions? Chat with ArthSakhi anytime! Get instant answers in your preferred language.',
      icon: '💬',
    },
    {
      title: 'Government Schemes',
      content: 'Discover schemes available in your state. Learn about eligibility criteria and application steps.',
      icon: '📄',
    },
    {
      title: 'Community',
      content: 'Connect with other learners! Share success stories and learn from the experiences of women on similar journeys.',
      icon: '👥',
    },
    {
      title: 'You\'re All Set!',
      content: 'Start your journey towards financial independence. Remember, every small step counts!',
      icon: '✨',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {t('tutorialWelcome')}
          </h2>
          <button
            onClick={handleSkip}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {steps[currentStep].content}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'w-8 bg-emerald-600'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              {t('tutorialPrevious')}
            </button>

            <div className="text-sm text-gray-500">
              {currentStep + 1} / {steps.length}
            </div>

            <button
              onClick={handleNext}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? t('tutorialFinish') : t('tutorialNext')}
              {currentStep < steps.length - 1 && <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
