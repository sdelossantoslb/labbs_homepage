import React from 'react';
import ServicesArea from '../services/components/ServicesArea';
import AppointmentSection from './components/AppointmentSection';
import PostNewsSection from './components/PostNewsSection';
import CarrouselBanner from './components/CarrouselBanner';
import ConsultaPagosSection from './components/ConsultaPagosSection';
import OurCertifications from './components/OurCertifications';
import PagoOnlineSection from '../services/components/PagoOnlineSection';

const messageBanner = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

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
