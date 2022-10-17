import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.scss';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content/Content';
import UserInterface from './components/UI/UserInterface';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL} hashType='slash'>
    <Routes>
        <Route path="/" element={<App />}> 
          <Route path="/" element={<Content/>}/>
          <Route exact path="/ui" element={<UserInterface/>}/>
        </Route>
    </Routes>
  </HashRouter>
);