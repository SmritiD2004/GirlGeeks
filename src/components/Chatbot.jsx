import { Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Chatbot() {
  const { t } = useLanguage();
  const streamlitUrl = 'https://financial-literacy-chatbot-nlolysappzposw3pakosfbc.streamlit.app/';

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-xl shadow-md">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <Bot className="text-emerald-600" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">{t('appName')}</h2>
            <p className="text-emerald-50 text-sm">{t('tagline')}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <Bot className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Talk to ArthSakhi</h3>
          <p className="text-gray-600 mb-6">
            Get personalized financial guidance, answers to your money questions, and tips on budgeting, saving, investments, and more.
          </p>
          <a
            href={streamlitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Open Financial Chatbot
          </a>
          <p className="text-sm text-gray-500 mt-4">Opens in a new window</p>
        </div>
      </div>
    </div>
  );
}
