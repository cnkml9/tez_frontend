import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'alertifyjs/build/alertify.js';
import 'alertifyjs/build/alertify';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/semantic.css';
import 'react-toastify/dist/ReactToastify.css'
 import 'resize-observer-polyfill/dist/ResizeObserver.global';


const root = ReactDOM.createRoot(document.getElementById('root'));

const removeElements = () => {
  const elementsToRemove = document.querySelectorAll('.ScrollSmoother-wrapper');
  elementsToRemove.forEach((element) => {
    element.remove();
  });
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')

);

removeElements();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
