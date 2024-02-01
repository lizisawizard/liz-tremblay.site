import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.scss';
import App from './App';
import Landing from './pages/Landing';
import About from './pages/About';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Landing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path='/blog/:page' exact component={Blog} />
        </Route>
    </Routes>
  </BrowserRouter>
);