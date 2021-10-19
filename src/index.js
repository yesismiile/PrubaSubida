import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/SumarNumeros/SumarNumeros'
import SumarNumeros from './components/SumarNumeros/SumarNumeros';

ReactDOM.render(
  <div className="App">
    <SumarNumeros num1="5" num2="7"/>
    <SumarNumeros num1="456" num2="46"/>
    <SumarNumeros num1="4575" num2="4678"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
