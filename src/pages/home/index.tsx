import React from 'react';
import ServicesArea from '../services/components/ServicesArea';
import AppointmentSection from './components/AppointmentSection';
import PostNewsSection from './components/PostNewsSection';
import CarrouselBanner from './components/CarrouselBanner';
import ConsultaPagosSection from './components/ConsultaPagosSection';
import OurCertifications from './components/OurCertifications';
import PagoOnlineSection from '../services/components/PagoOnlineSection';

const messageBanner = `El Laboratorio Balístico y Biométrico del Sistema Nacional de Armas (LABBS), captura las informaciones sociodemográficas y biométricas de los licenciatarios, 
                      que junto a las huellas balísticas de las arma conforman un centro de servicios y atención al usuario con una base de datos nacional de las armas legales, que sirve 
                      como instrumento de valor estratégico para las autoridades estatales.`;

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <CarrouselBanner
        title="Servicio de Biometría y Balística"
        textBannerMessage={messageBanner}
      />
      <ServicesArea />
      <PagoOnlineSection />
      <AppointmentSection />
      <ConsultaPagosSection />
      <PostNewsSection />
      <OurCertifications />
    </div>
  );
};

export default HomePage;
