import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BG from './BG';

ReactDOM.render(
  <React.StrictMode>
    <BG/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
