import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';


const basename = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

