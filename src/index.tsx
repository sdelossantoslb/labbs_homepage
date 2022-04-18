import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/style.css';
import './assets/styles/responsive.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import UserAppContext from './context/UserAppContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAppContext>
        <App />
      </UserAppContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
