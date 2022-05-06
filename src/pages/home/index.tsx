import React from 'react';
import ServicesArea from '../services/components/ServicesArea';
import AppointmentSection from './components/AppointmentSection';
import PostNewsSection from './components/PostNewsSection';
import CarrouselBanner from './components/CarrouselBanner';
import ConsultaPagosSection from './components/ConsultaPagosSection';
import OurCertifications from './components/OurCertifications';
import PagoOnlineSection from '../services/components/PagoOnlineSection';

const messageBanner = `EL MIP ha creado, como piedra angular del SISNA, el Laboratorio Balístico y Biométrico (LABBS).
El Laboratorio Balístico y Biométrico (LABBS), captura las informaciones sociodemográficas y biométricas de los licenciatarios;
 y las huellas balísticas de las armas, y puebla una base de datos nacional de armas legales (propiedad de civiles y de las instituciones militares y policiales).`;

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
