import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Popup from './Pages/Popup.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

const isExtensionPopup = document.getElementById('root-popup');

const rootElement = isExtensionPopup ? document.getElementById('root-popup') : document.getElementById('root');



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    {isExtensionPopup ? <Popup /> : <App />}
    </Router>
  </React.StrictMode>,
)
