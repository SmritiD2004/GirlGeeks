import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Schemes() {
  const { profile } = useAuth();
  const { t, getMultilingual } = useLanguage();
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedScheme, setExpandedScheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSchemes();
  }, [profile]);

  useEffect(() => {
    filterSchemes();
  }, [schemes, selectedCategory]);

  const loadSchemes = async () => {
    try {
      const { data } = await supabase
        .from('state_schemes')
        .select('*')
        .order('created_at', { ascending: false });

      setSchemes(data || []);
    } catch (error) {
      console.error('Error loading schemes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterSchemes = () => {
    let filtered = schemes;

    if (profile?.home_state) {
      filtered = filtered.filter(
        s => s.state === profile.home_state || s.state === 'All India'
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    setFilteredSchemes(filtered);
  };

  const categories = ['all', ...new Set(schemes.map(s => s.category))];

  const toggleScheme = (schemeId) => {
    setExpandedScheme(expandedScheme === schemeId ? null : schemeId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('schemes')}</h1>
        <p className="text-gray-600">
          {profile?.home_state
            ? `Schemes available in ${profile.home_state} and nationwide`
            : 'Explore government schemes for financial empowerment'}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Schemes' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              isExpanded={expandedScheme === scheme.id}
              onToggle={() => toggleScheme(scheme.id)}
              getMultilingual={getMultilingual}
              t={t}
            />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <FileText className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 text-lg">No schemes found</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SchemeCard({ scheme, isExpanded, onToggle, getMultilingual, t }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                {scheme.state}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {scheme.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {getMultilingual(scheme.scheme_name)}
            </h3>
            <p className="text-gray-600">
              {getMultilingual(scheme.description)}
            </p>
          </div>
          <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            {isExpanded ? (
              <ChevronUp className="text-gray-600" />
            ) : (
              <ChevronDown className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-6 border-t pt-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">✓</span>
              {t('eligibility')}
            </h4>
            <div className="text-gray-600 whitespace-pre-wrap">
              {getMultilingual(scheme.eligibility)}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-emerald-600">→</span>
              {t('howToApply')}
            </h4>
            <div className="text-gray-600 whitespace-pre-wrap">
              {getMultilingual(scheme.application_steps)}
            </div>
          </div>

          {scheme.contact_info && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-emerald-600">📞</span>
                {t('contactInfo')}
              </h4>
              <div className="text-gray-600">
                {typeof scheme.contact_info === 'object' ? (
                  <div className="space-y-1">
                    {scheme.contact_info.website && (
                      <a
                        href={scheme.contact_info.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ) : (
                  <p>{scheme.contact_info}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
