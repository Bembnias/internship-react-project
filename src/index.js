import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SwaggerState from './context/swagger-nfz/SwaggerState';
import App from './App';

// Swagger State wraps App component so app can call API once and use data on different pages, with no need to call it again
ReactDOM.render(
  <React.StrictMode>
    <SwaggerState>
      <App />
    </SwaggerState>
  </React.StrictMode>,
  document.getElementById('root')
);