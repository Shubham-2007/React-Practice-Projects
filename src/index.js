import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './compouents/TO-Do_List/App';  //Project 1
// import App from './compouents/Tic_Tact-To/App';    //Project 2
// import App from './Money-Expenses/App';  //Project 3
// import App from './Styled_To-Do/App';  //Project 4
import App from './App'
// import App from './Log-In_Out-Page/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
