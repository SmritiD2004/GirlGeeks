import { supabase } from './supabase';
import { MODULE_TEMPLATES, STATE_SCHEMES } from '../data/moduleContent';

export const seedDatabase = async () => {
  try {
    const { data: existingModules } = await supabase
      .from('learning_modules')
      .select('id', { count: 'exact', head: true });

    if (existingModules && existingModules.length > 0) {
      return;
    }

    for (const module of MODULE_TEMPLATES) {
      const { error } = await supabase.from('learning_modules').insert({
        title: module.title,
        description: module.description,
        content: module.content,
        category: module.category,
        difficulty_level: module.difficulty_level,
        order_index: module.order_index,
      });

      if (error && error.code !== 'PGRST116') {
        console.error('Error inserting module:', error);
      }
    }

    for (const scheme of STATE_SCHEMES) {
      const { error } = await supabase.from('state_schemes').insert({
        state: scheme.state,
        scheme_name: scheme.scheme_name,
        description: scheme.description,
        eligibility: scheme.eligibility,
        application_steps: scheme.application_steps,
        contact_info: scheme.contact_info,
        category: scheme.category,
      });

      if (error && error.code !== 'PGRST116') {
        console.error('Error inserting scheme:', error);
      }
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
