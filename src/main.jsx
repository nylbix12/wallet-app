import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeSwitcher } from './components/ThemeSwitcher';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  
  </BrowserRouter>
);