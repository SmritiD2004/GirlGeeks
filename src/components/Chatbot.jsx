import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const { profile } = useAuth();
  const { t, currentLanguage } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadChatHistory();
  }, [profile]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadChatHistory = async () => {
    if (!profile) return;

    try {
      const { data } = await supabase
        .from('chat_history')
        .select('*')
        .eq('user_id', profile.id)
        .order('created_at', { ascending: true })
        .limit(20);

      if (data && data.length > 0) {
        const formattedMessages = data.flatMap(chat => [
          { role: 'user', content: chat.message },
          { role: 'assistant', content: chat.response },
        ]);
        setMessages(formattedMessages);
      } else {
        setMessages([
          {
            role: 'assistant',
            content: getWelcomeMessage(),
          },
        ]);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const getWelcomeMessage = () => {
    const welcomeMessages = {
      en: 'Hello! I\'m ArthSakhi, your financial companion. I can help you with budgeting, saving, digital payments, loans, investments, schemes, and fraud prevention. What would you like to know today?',
      hi: 'नमस्ते! मैं अर्थसखी हूं, आपकी वित्तीय साथी। मैं बजट, बचत, डिजिटल भुगतान, ऋण, निवेश और योजनाओं में मदद कर सकती हूं। आज आप क्या जानना चाहेंगे?',
      mr: 'नमस्कार! मी अर्थसखी आहे. मी तुम्हाला बजेट, बचत आणि आर्थिक सल्ला देऊ शकते.',
    };

    return welcomeMessages[currentLanguage] || welcomeMessages.en;
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    const responses = {
      en: {
        greeting: "Hello! I'm happy to help you with your financial questions.",
        budget: "Budgeting is essential for financial health. Start by tracking your income and expenses. Follow the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.",
        saving: "Great question about saving! Start small - even 10% of your income matters. Open a savings account, set up automatic transfers, and build an emergency fund.",
        digital: "Digital payments are safe when you follow precautions: Never share OTP or passwords, use secure networks, verify merchant details, and keep your apps updated.",
        loan: "Before taking a loan, compare interest rates, understand terms, calculate EMI affordability, and read the fine print. Mudra Yojana offers favorable terms for women.",
        investment: "Start with safe options like Fixed Deposits (4-7% interest), PPF, or Sukanya Samriddhi Yojana. Never invest without understanding the risk.",
        scheme: "Government schemes for women include PMJDY (bank accounts), Sukanya Samriddhi Yojana, and Mudra Yojana. Check the Schemes section for state-specific programs!",
        fraud: "Stay safe: Never share personal details or OTPs. Verify caller identity, be cautious of offers that seem too good, and report suspicious activity.",
        default: "That's an interesting question! I can help with budgeting, saving, digital payments, loans, investments, and fraud prevention. What's on your mind?",
      },
      hi: {
        greeting: "नमस्ते! आपके वित्तीय सवालों में मदद करने के लिए खुश हूं।",
        budget: "बजट बनाना वित्तीय स्वास्थ्य के लिए जरूरी है। 50/30/20 नियम अपनाएं।",
        saving: "बचत के लिए छोटी शुरुआत करें। बचत खाता खोलें और आपातकालीन फंड बनाएं।",
        scheme: "महिलाओं के लिए प्रधानमंत्री जन धन योजना, सुकन्या समृद्धि योजना और मुद्रा योजना हैं।",
        default: "बजट, बचत, निवेश और धोखाधड़ी रोकथाम में मदद कर सकती हूं।",
      },
    };

    const langResponses = responses[currentLanguage] || responses.en;

    if (message.includes('hello') || message.includes('hi') || message.includes('नमस्ते')) {
      return langResponses.greeting;
    } else if (message.includes('budget') || message.includes('बजट')) {
      return langResponses.budget;
    } else if (message.includes('sav') || message.includes('बचत')) {
      return langResponses.saving;
    } else if (message.includes('digital') || message.includes('payment') || message.includes('upi')) {
      return langResponses.digital || langResponses.default;
    } else if (message.includes('loan') || message.includes('ऋण')) {
      return langResponses.loan || langResponses.default;
    } else if (message.includes('invest') || message.includes('निवेश')) {
      return langResponses.investment || langResponses.default;
    } else if (message.includes('scheme') || message.includes('योजना')) {
      return langResponses.scheme || langResponses.default;
    } else if (message.includes('fraud') || message.includes('scam')) {
      return langResponses.fraud || langResponses.default;
    } else {
      return langResponses.default;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !profile) return;

    const userMessage = input.trim();
    setInput('');
    setLoading(true);

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = generateResponse(userMessage);

      await supabase.from('chat_history').insert({
        user_id: profile.id,
        message: userMessage,
        response: response,
        language: currentLanguage,
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                message.role === 'user' ? 'bg-emerald-600' : 'bg-gray-200'
              }`}
            >
              {message.role === 'user' ? (
                <User className="text-white" size={20} />
              ) : (
                <Bot className="text-gray-600" size={20} />
              )}
            </div>
            <div
              className={`max-w-[70%] p-4 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none'
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-gray-200">
              <Bot className="text-gray-600" size={20} />
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('askQuestion')}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
