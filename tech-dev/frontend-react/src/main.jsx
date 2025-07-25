import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import './assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this file renders react components */}
    <App />
  </StrictMode>,
)
