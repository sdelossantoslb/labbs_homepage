import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import BlogPage from './pages/blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage/>} />
        <Route path={'/Nosotros'} element={<AboutPage/>} />
        <Route path={'/Servicios'} element={<ServicesPage/>} />
        <Route path={'/Blogs'} element={<BlogPage/>} />
      </Routes>
    </div>
  );
}

export default App;
