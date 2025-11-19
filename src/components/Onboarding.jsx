import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Puducherry',
];

const FINANCIAL_GOALS = [
  'saving_emergency',
  'buying_home',
  'education',
  'business',
  'retirement',
  'debt_free',
  'wealth_building',
];

const OCCUPATIONS = [
  'homemaker',
  'student',
  'employed',
  'self_employed',
  'entrepreneur',
  'retired',
  'seeking_work',
];

export default function Onboarding({ onComplete }) {
  const { updateProfile } = useAuth();
  const { t, languages, changeLanguage, currentLanguage } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    occupation: '',
    financial_goals: [],
    literacy_level: 'beginner',
    home_state: '',
    preferred_language: 'en',
  });
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal) => {
    setFormData(prev => ({
      ...prev,
      financial_goals: prev.financial_goals.includes(goal)
        ? prev.financial_goals.filter(g => g !== goal)
        : [...prev.financial_goals, goal]
    }));
  };

  const handleLanguageSelect = (lang) => {
    handleChange('preferred_language', lang);
    changeLanguage(lang);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await updateProfile(formData);
      if (error) throw error;
      onComplete();
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.preferred_language !== '';
      case 2:
        return formData.age !== '' && formData.occupation !== '';
      case 3:
        return formData.home_state !== '';
      case 4:
        return formData.financial_goals.length > 0;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-4">{t('appName')}</h1>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('onboarding')}
              </h2>
              <p className="text-gray-600 mb-6">{t('welcomeMessage')}</p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('language')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.preferred_language === lang.code
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="font-medium">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('onboarding')}
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('age')}
                </label>
                <input
                  type="number"
                  min="18"
                  max="100"
                  value={formData.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('occupation')}
                </label>
                <select
                  value={formData.occupation}
                  onChange={(e) => handleChange('occupation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                >
                  <option value="">Select occupation</option>
                  {OCCUPATIONS.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('literacyLevel')}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleChange('literacy_level', level)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.literacy_level === level
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      {t(level)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('homeState')}
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('homeState')}
                </label>
                <select
                  value={formData.home_state}
                  onChange={(e) => handleChange('home_state', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('financialGoals')}
              </h2>
              <p className="text-gray-600 mb-4">Select all that apply</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {FINANCIAL_GOALS.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleGoal(goal)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.financial_goals.includes(goal)
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-medium">
                      {goal.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={step === 1}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              {t('previous')}
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {t('next')}
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid() || loading}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : t('submit')}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
