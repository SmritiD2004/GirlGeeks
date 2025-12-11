// src/components/Schemes.jsx
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, ExternalLink, Search, Filter } from 'lucide-react';

const SCHEMES_DATA = [
  {
    id: 1,
    title: {
      en: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      hi: 'प्रधानमंत्री जन धन योजना',
    },
    description: {
      en: 'Zero-balance bank account with insurance benefits and access to credit',
      hi: 'बीमा लाभ और ऋण की सुविधा के साथ जीरो बैलेंस बैंक खाता',
    },
    category: 'banking',
    eligibility: {
      en: 'All Indian citizens above 10 years',
      hi: '10 वर्ष से अधिक आयु के सभी भारतीय नागरिक',
    },
    benefits: {
      en: [
        'Zero minimum balance',
        '₹10,000 overdraft facility',
        '₹2 lakh accident insurance',
        'RuPay debit card',
      ],
      hi: [
        'न्यूनतम शून्य बैलेंस',
        '₹10,000 ओवरड्राफ्ट सुविधा',
        '₹2 लाख दुर्घटना बीमा',
        'रुपे डेबिट कार्ड',
      ],
    },
    link: 'https://pmjdy.gov.in/',
  },
  {
    id: 2,
    title: {
      en: 'Sukanya Samriddhi Yojana',
      hi: 'सुकन्या समृद्धि योजना',
    },
    description: {
      en: 'Small deposit scheme for girl child with attractive interest rate',
      hi: 'बालिकाओं के लिए आकर्षक ब्याज दर वाली छोटी जमा योजना',
    },
    category: 'savings',
    eligibility: {
      en: 'Girl child below 10 years of age',
      hi: '10 वर्ष से कम आयु की बालिका',
    },
    benefits: {
      en: [
        'High interest rate (~8%)',
        'Tax benefits under Section 80C',
        'Maturity after 21 years',
        'Partial withdrawal for education',
      ],
      hi: [
        'उच्च ब्याज दर (~8%)',
        'धारा 80C के तहत कर लाभ',
        '21 वर्ष बाद परिपक्वता',
        'शिक्षा के लिए आंशिक निकासी',
      ],
    },
    link: 'https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=84',
  },
  {
    id: 3,
    title: {
      en: 'Pradhan Mantri Mudra Yojana (PMMY)',
      hi: 'प्रधानमंत्री मुद्रा योजना',
    },
    description: {
      en: 'Loans up to ₹10 lakh for small businesses and entrepreneurs',
      hi: 'छोटे व्यवसायों और उद्यमियों के लिए ₹10 लाख तक के ऋण',
    },
    category: 'loans',
    eligibility: {
      en: 'Small business owners, artisans, vendors, and entrepreneurs',
      hi: 'छोटे व्यवसाय मालिक, कारीगर, विक्रेता और उद्यमी',
    },
    benefits: {
      en: [
        'Loans from ₹50,000 to ₹10 lakh',
        'No collateral required',
        'Lower interest rates',
        'Three categories: Shishu, Kishor, Tarun',
      ],
      hi: [
        '₹50,000 से ₹10 लाख तक ऋण',
        'कोई जमानत की आवश्यकता नहीं',
        'कम ब्याज दरें',
        'तीन श्रेणियां: शिशु, किशोर, तरुण',
      ],
    },
    link: 'https://www.mudra.org.in/',
  },
  {
    id: 4,
    title: {
      en: 'Atal Pension Yojana (APY)',
      hi: 'अटल पेंशन योजना',
    },
    description: {
      en: 'Pension scheme guaranteeing minimum pension after 60 years',
      hi: '60 वर्ष के बाद न्यूनतम पेंशन की गारंटी देने वाली योजना',
    },
    category: 'pension',
    eligibility: {
      en: 'Citizens aged 18-40 years with bank account',
      hi: 'बैंक खाते वाले 18-40 वर्ष के नागरिक',
    },
    benefits: {
      en: [
        'Guaranteed pension of ₹1,000 to ₹5,000',
        'Government co-contribution',
        'Spouse pension available',
        'Pension after 60 years',
      ],
      hi: [
        '₹1,000 से ₹5,000 की गारंटीकृत पेंशन',
        'सरकारी सह-योगदान',
        'पति/पत्नी पेंशन उपलब्ध',
        '60 वर्ष के बाद पेंशन',
      ],
    },
    link: 'https://npscra.nsdl.co.in/scheme-details.php',
  },
  {
    id: 5,
    title: {
      en: 'Stand Up India Scheme',
      hi: 'स्टैंड अप इंडिया योजना',
    },
    description: {
      en: 'Loans for SC/ST and women entrepreneurs to start businesses',
      hi: 'SC/ST और महिला उद्यमियों के लिए व्यवसाय शुरू करने हेतु ऋण',
    },
    category: 'loans',
    eligibility: {
      en: 'SC/ST and women entrepreneurs above 18 years',
      hi: '18 वर्ष से अधिक आयु के SC/ST और महिला उद्यमी',
    },
    benefits: {
      en: [
        'Loans from ₹10 lakh to ₹1 crore',
        'Composite loans for new enterprises',
        'Lower interest rates',
        'Credit guarantee support',
      ],
      hi: [
        '₹10 लाख से ₹1 करोड़ तक ऋण',
        'नए उद्यमों के लिए समग्र ऋण',
        'कम ब्याज दरें',
        'क्रेडिट गारंटी सहायता',
      ],
    },
    link: 'https://www.standupmitra.in/',
  },
  {
    id: 6,
    title: {
      en: 'Pradhan Mantri Awas Yojana (PMAY)',
      hi: 'प्रधानमंत्री आवास योजना',
    },
    description: {
      en: 'Affordable housing scheme with subsidized home loans',
      hi: 'सब्सिडी युक्त गृह ऋण के साथ किफायती आवास योजना',
    },
    category: 'housing',
    eligibility: {
      en: 'EWS/LIG/MIG families without pucca house',
      hi: 'EWS/LIG/MIG परिवार जिनके पास पक्का मकान नहीं है',
    },
    benefits: {
      en: [
        'Interest subsidy up to ₹2.67 lakh',
        'Affordable housing for all',
        'Women ownership preference',
        'Eco-friendly construction',
      ],
      hi: [
        '₹2.67 लाख तक ब्याज सब्सिडी',
        'सभी के लिए किफायती आवास',
        'महिला स्वामित्व को प्राथमिकता',
        'पर्यावरण के अनुकूल निर्माण',
      ],
    },
    link: 'https://pmaymis.gov.in/',
  },
];

export default function Schemes() {
  const { t, getMultilingual } = useLanguage();
  const [schemes, setSchemes] = useState(SCHEMES_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedScheme, setSelectedScheme] = useState(null);

  const categories = ['all', 'banking', 'savings', 'loans', 'pension', 'housing'];

  useEffect(() => {
    let filtered = SCHEMES_DATA;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((s) => s.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((s) => {
        const title = getMultilingual(s.title).toLowerCase();
        const desc = getMultilingual(s.description).toLowerCase();
        return (
          title.includes(searchTerm.toLowerCase()) ||
          desc.includes(searchTerm.toLowerCase())
        );
      });
    }

    setSchemes(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <FileText className="text-emerald-600" />
          {t('governmentSchemes') || 'Government Schemes'}
        </h1>
        <p className="text-gray-600">
          {t('schemesSubtitle') ||
            'Discover financial schemes and benefits available to you'}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchSchemes') || 'Search schemes...'}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="text-gray-600" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {t(`category.${cat}`) || cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <SchemeCard
            key={scheme.id}
            scheme={scheme}
            onClick={() => setSelectedScheme(scheme)}
          />
        ))}
      </div>

      {schemes.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <FileText className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-600 text-lg">
            {t('noSchemesFound') || 'No schemes found matching your criteria'}
          </p>
        </div>
      )}

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <SchemeDetailModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </div>
  );
}

function SchemeCard({ scheme, onClick }) {
  const { getMultilingual } = useLanguage();

  const categoryColors = {
    banking: 'bg-blue-100 text-blue-700',
    savings: 'bg-green-100 text-green-700',
    loans: 'bg-purple-100 text-purple-700',
    pension: 'bg-orange-100 text-orange-700',
    housing: 'bg-pink-100 text-pink-700',
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-emerald-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            categoryColors[scheme.category] || 'bg-gray-100 text-gray-700'
          }`}
        >
          {scheme.category}
        </span>
      </div>

      <h3 className="font-bold text-gray-800 mb-2 text-lg line-clamp-2">
        {getMultilingual(scheme.title)}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {getMultilingual(scheme.description)}
      </p>

      <div className="flex items-center text-emerald-600 font-medium text-sm">
        <span>Learn More</span>
        <ExternalLink size={16} className="ml-2" />
      </div>
    </div>
  );
}

function SchemeDetailModal({ scheme, onClose }) {
  const { t, getMultilingual } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white sticky top-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold pr-8">
            {getMultilingual(scheme.title)}
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('description') || 'Description'}
            </h3>
            <p className="text-gray-600">
              {getMultilingual(scheme.description)}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('eligibility') || 'Eligibility'}
            </h3>
            <p className="text-gray-600">
              {getMultilingual(scheme.eligibility)}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('keyBenefits') || 'Key Benefits'}
            </h3>
            <ul className="space-y-2">
              {getMultilingual(scheme.benefits).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t">
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors"
            >
              {t('visitOfficialWebsite') || 'Visit Official Website'}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}