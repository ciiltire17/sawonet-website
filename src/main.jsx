import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from './router.jsx';
import './styles.css';

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
