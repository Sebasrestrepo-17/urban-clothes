import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/index.css";
import Page from './pages/Page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
