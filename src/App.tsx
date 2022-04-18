import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import BlogPage from './pages/blog';
import FooterArea from './components/footer';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/Nosotros'} element={<AboutPage />} />
        <Route path={'/Servicios'} element={<ServicesPage />} />
        <Route path={'/Blogs'} element={<BlogPage />} />
      </Routes>
      <FooterArea />
    </div>
  );
}

export default App;
