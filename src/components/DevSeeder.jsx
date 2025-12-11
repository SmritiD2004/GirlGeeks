// src/components/DevSeeder.jsx
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { MODULE_TEMPLATES } from '../data/moduleContent';
import { Database } from 'lucide-react';

export default function DevSeeder() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  const seedModules = async () => {
    setLoading(true);
    setMessage('');

    try {
      console.log('🌱 Seeding learning modules...');

      // Check if modules already exist
      const { data: existing } = await supabase
        .from('learning_modules')
        .select('id')
        .limit(1);

      if (existing && existing.length > 0) {
        setMessage('⚠️ Modules already exist. Clear them first if you want to re-seed.');
        setLoading(false);
        return;
      }

      // Insert modules
      const modulesToInsert = MODULE_TEMPLATES.map((module, index) => ({
        title: module.title,
        description: module.description,
        content: module.content,
        category: module.category,
        difficulty_level: module.difficulty_level,
        order_index: module.order_index || index + 1,
      }));

      const { error } = await supabase
        .from('learning_modules')
        .insert(modulesToInsert);

      if (error) throw error;

      console.log('✅ Modules seeded successfully!');
      setMessage('✅ Successfully seeded learning modules!');
    } catch (error) {
      console.error('❌ Error seeding modules:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearModules = async () => {
    if (!confirm('Are you sure you want to delete all learning modules?')) {
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      console.log('🗑️ Clearing learning modules...');

      const { error } = await supabase
        .from('learning_modules')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

      if (error) throw error;

      console.log('✅ Modules cleared successfully!');
      setMessage('✅ Successfully cleared all modules!');
    } catch (error) {
      console.error('❌ Error clearing modules:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mt-6">
      <div className="flex items-center gap-3 mb-4">
        <Database className="text-yellow-600" size={24} />
        <h3 className="text-lg font-semibold text-gray-800">
          Development Tools
        </h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        These tools are only visible in development mode.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={seedModules}
          disabled={loading}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? 'Seeding...' : 'Seed Learning Modules'}
        </button>

        <button
          onClick={clearModules}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? 'Clearing...' : 'Clear All Modules'}
        </button>
      </div>

      {message && (
        <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
          <p className="text-sm">{message}</p>
        </div>
      )}
    </div>
  );
}