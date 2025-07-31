import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { generateRoundFavicon } from './utils/generateRoundFavicon.js'

// Generar favicon circular
generateRoundFavicon('/cv.jpg').then((dataURL) => {
  const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = dataURL;
  
  if (!document.querySelector('link[rel="icon"]')) {
    document.head.appendChild(link);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
