import React from 'react';
// import dotenf from 'dotenv';
import 'react-notifications-component/dist/theme.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import BlogPage from './pages/blog';
import FooterArea from './components/layout/footer';
import ContactPage from './pages/contact';
import HistoricoPage from './pages/consultas/historico';
import { ReactNotifications } from 'react-notifications-component';

// dotenf.config();
function App() {
  return (
    <div className="wrapper">
      <ReactNotifications />
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/services'} element={<ServicesPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/comunity'} element={<BlogPage />} />
        <Route path={'/consulta/historico'} element={<HistoricoPage />} />
      </Routes>
      <FooterArea />
    </div>
  );
}

export default App;
