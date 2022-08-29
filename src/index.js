import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.scss';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Content from './components/Content/Content';
import UserInterface from './components/UI/UserInterface';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}> 
          <Route path="home" element={<Content/>}/>
          <Route path="user-interface" element={<UserInterface/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );