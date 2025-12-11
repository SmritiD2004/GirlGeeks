// src/components/Auth.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Loader2 } from 'lucide-react';

export default function Auth() {
  const { signIn, signUp } = useAuth();
  const { t, setLanguage } = useLanguage();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // ADDED: Force English on Auth page
  useEffect(() => {
    console.log('🌐 Auth: Setting language to English');
    setLanguage('en');
  }, [setLanguage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setError(t('passwordsDoNotMatch') || 'Passwords do not match');
          setLoading(false);
          return;
        }
        
        console.log('🔵 Auth Form: Signing up...');
        const { error } = await signUp(email, password);
        
        if (error) {
          throw error;
        }
        
        // Success! Don't show message, just let the app redirect
        console.log('✅ Auth Form: Sign up complete, redirecting...');
        setSuccess('Account created! Redirecting to onboarding...');
      } else {
        console.log('🔵 Auth Form: Signing in...');
        const { error } = await signIn(email, password);
        
        if (error) {
          throw error;
        }
        
        console.log('✅ Auth Form: Sign in complete, redirecting...');
        setSuccess('Welcome back! Loading your dashboard...');
      }
    } catch (error) {
      console.error('❌ Auth Form: Error:', error);
      setError(error?.message || t('somethingWentWrong') || 'Something went wrong');
    } finally {
      // Keep loading state briefly to show the redirect message
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-center mb-2">{t('appName')}</h1>
          <p className="text-center text-emerald-50">{t('tagline')}</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {isSignUp ? t('signUp') : t('signIn')}
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
                disabled={loading}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
                disabled={loading}
                minLength={6}
                placeholder="••••••••"
              />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('confirmPassword')}
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                  disabled={loading}
                  minLength={6}
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  {isSignUp ? 'Creating account...' : 'Signing in...'}
                </>
              ) : (
                isSignUp ? t('signUp') : t('signIn')
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
                setSuccess('');
              }}
              disabled={loading}
              className="text-emerald-600 hover:text-emerald-700 font-medium disabled:opacity-50"
            >
              {isSignUp
                ? t('alreadyHaveAccount') || 'Already have an account? Sign in'
                : t('dontHaveAccount') || "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}