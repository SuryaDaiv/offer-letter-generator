import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure you have this file or remove this line if not
import App from './App';
// import reportWebVitals from './reportWebVitals'; // This is optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
