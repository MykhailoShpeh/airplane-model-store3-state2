import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { App } from '@/components/App/App.jsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/constants/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store3-state-1">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode >
);

