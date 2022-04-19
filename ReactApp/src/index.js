import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/pages/App';
import Login from "./components/pages/Login";
import Code from "./components/pages/Code";
import MyClasses from "./components/pages/MyClasses";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorker from './service-worker';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-classes" element={<MyClasses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/code" element={<Code />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.register();
