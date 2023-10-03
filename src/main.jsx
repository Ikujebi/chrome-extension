import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Popup from './Pages/Popup.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

const isExtensionPopup = document.getElementById('root-popup');

const rootElement = isExtensionPopup ? document.getElementById('root-popup') : document.getElementById('root');



if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        {isExtensionPopup ? <Popup /> : <App />}
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Make sure your HTML has an element with the ID "root" or "root-popup".');
}

