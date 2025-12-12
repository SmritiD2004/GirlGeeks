// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadingProfileRef = useRef(false);

  useEffect(() => {
    console.log('🔵 Auth: Initializing...');
    
    let mounted = true;

    const initAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (!mounted) return;

        if (error) {
          console.error('❌ Auth: Error getting session:', error);
          setLoading(false);
          return;
        }

        console.log('🔵 Auth: Session loaded', session ? 'SIGNED_IN' : 'NO_SESSION');
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await loadProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      } catch (err) {
        console.error('❌ Auth: Exception during init:', err);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔵 Auth: State changed', event);
        
        if (!mounted) return;

        setUser(session?.user ?? null);
        
        if (event === 'SIGNED_IN' && session?.user) {
          await loadProfile(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
      console.log('🔵 Auth: Cleanup');
    };
  }, []);

  // In AuthContext.jsx, modify loadProfile function:
const loadProfile = async (userId) => {
  if (loadingProfileRef.current) {
    console.log('⚠ Auth: Already loading profile, skipping...');
    return;
  }

  loadingProfileRef.current = true;
  console.log('🔵 Auth: loadProfile start for', userId);

  // ADD: Timeout wrapper
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Profile load timeout')), 10000)
  );

  try {
    const profilePromise = supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    const { data, error } = await Promise.race([profilePromise, timeoutPromise]);

    if (error) {
      console.error('❌ Auth: Error loading profile:', error);
      setProfile(null);
    } else if (data) {
      console.log('✅ Auth: Profile loaded');
      setProfile(data);
    } else {
      console.log('ℹ Auth: No profile found (user needs onboarding)');
      setProfile(null);
    }
  } catch (err) {
    console.error('❌ Auth: Exception loading profile:', err);
    setProfile(null);
  } finally {
    console.log('🔵 Auth: loadProfile done, setting loading=false');
    loadingProfileRef.current = false;
    setLoading(false);
  }
};


  const refreshProfile = async () => {
    if (user?.id) {
      console.log('🔄 Auth: Refreshing profile');
      await loadProfile(user.id);
    }
  };

  const signIn = async (email, password) => {
    console.log('🔵 Auth: Signing in...');
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('❌ Auth: Sign in error:', error);
    } else {
      console.log('✅ Auth: Sign in successful');
    }
    
    return { data, error };
  };

  const signUp = async (email, password) => {
    console.log('🔵 Auth: Signing up...');
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) {
      console.error('❌ Auth: Sign up error:', error);
    } else {
      console.log('✅ Auth: Sign up successful');
    }
    
    return { data, error };
  };

  const signOut = async () => {
    console.log('🔵 Auth: Signing out...');
    
    // CHANGED: Clear all user-specific data from localStorage
    localStorage.removeItem('preferred_language');
    
    // Clear any tutorial flags
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('tutorial_shown_')) {
        localStorage.removeItem(key);
      }
    });
    
    setProfile(null);
    setUser(null);
    
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('❌ Auth: Sign out error:', error);
    } else {
      console.log('✅ Auth: Sign out successful - localStorage cleaned');
    }
  };

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}