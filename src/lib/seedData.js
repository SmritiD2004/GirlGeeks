// src/lib/seedData.js
import { supabase } from './supabase';
import { MODULE_TEMPLATES } from '../data/moduleContent';

export const seedDatabase = async () => {
  try {
    console.log('Seeding database: start');

    // 1. Check if learning_modules already has rows
    const {
      count: modulesCount,
      error: modulesCountError,
    } = await supabase
      .from('learning_modules')
      .select('*', { count: 'exact', head: true });

    console.log('learning_modules count:', modulesCount, modulesCountError);

    if (modulesCountError) {
      console.error('Error checking existing modules:', modulesCountError);
      // Bail out to avoid repeated failing inserts
      return;
    }

    // 2. Seed learning_modules only if empty
    if (!modulesCount || modulesCount === 0) {
      console.log('Seeding learning_modules from MODULE_TEMPLATES');
      for (const module of MODULE_TEMPLATES) {
        const { error } = await supabase.from('learning_modules').insert({
          title: module.title,
          description: module.description,
          content: module.content,
          category: module.category,
          difficulty_level: module.difficulty_level,
          order_index: module.order_index,
        });

        // PGRST116 = conflict (duplicate); ignore those, log others
        if (error && error.code !== 'PGRST116') {
          console.error('Error inserting module:', error);
        }
      }
    } else {
      console.log('learning_modules already seeded, skipping insert');
    }

    console.log('Database seeding completed');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
