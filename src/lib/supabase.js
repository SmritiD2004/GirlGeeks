// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please create a .env file with:');
  console.error('VITE_SUPABASE_URL=your_supabase_url');
  console.error('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Test connection
supabase
  .from('profiles')
  .select('count', { count: 'exact', head: true })
  .then(({ error }) => {
    if (error) {
      console.warn('⚠️ Supabase connection test failed:', error.message);
      console.warn('This might mean:');
      console.warn('1. Your Supabase credentials are incorrect');
      console.warn('2. The profiles table does not exist yet');
      console.warn('3. RLS policies are preventing access');
    } else {
      console.log('✅ Supabase connected successfully!');
    }
  });