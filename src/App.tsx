import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import BlogPage from './pages/blog';
import FooterArea from './components/layout/footer';
import ContactPage from './pages/contact';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/services'} element={<ServicesPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/blogs'} element={<BlogPage />} />
      </Routes>
      <FooterArea />
    </div>
  );
}

export default App;
