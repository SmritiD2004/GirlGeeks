// src/main.jsx
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Optional: lazy-load App for a small parse-time win on big apps
const App = lazy(() => import('./App.jsx'));

const rootEl = document.getElementById('root');
if (!rootEl) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Root element #root not found in index.html');
  }
  throw new Error('Root element not found');
}

createRoot(rootEl).render(
 
    <BrowserRouter>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </BrowserRouter>
);
