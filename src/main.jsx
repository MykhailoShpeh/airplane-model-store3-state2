import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { App } from '@/components/App/App.jsx';
import { AppCounter } from '@/components/App/AppCounter.jsx';
import { AppColorBox } from "@/components/App/AppColorBox.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store3-state2">
      {/* <App /> */}
      {/* <AppCounter /> */}
      <AppColorBox />
    </BrowserRouter>
  </StrictMode >
);

