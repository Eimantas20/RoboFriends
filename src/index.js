import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
// import { robots } from '../components/robots';
import App from './App';
import reactDom from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById(`root`)
// );
reactDom.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
