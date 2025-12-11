// vite.config.js (renamed)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Required for Tailwind
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Language-specific build optimization
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          i18n: ['react-i18next', 'i18next'],
          ui: ['framer-motion', 'react-tooltip']
        }
      }
    }
  }
});
