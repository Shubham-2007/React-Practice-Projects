import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './compouents/TO-Do_List/App';  //Project 1
// import App from './compouents/Tic_Tact-To/App';    //Project 2
import App from './compouents/Money-Manege/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
