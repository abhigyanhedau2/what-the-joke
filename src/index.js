import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';
import fav from '../src/assets/favicon.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={fav} />
    <App />
  </React.StrictMode>
);