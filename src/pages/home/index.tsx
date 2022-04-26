import React from 'react';
import ServicesArea from '../services/components/ServicesArea';
import AppointmentSection from './components/AppointmentSection';
import BlogSection from './components/BlogSection';
import CarrouselBanner from './components/CarrouselBanner';
import OurCertifications from './components/OurCertifications';

const messageBanner = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <CarrouselBanner
        title="Servicio de Biometria y Balistica"
        textBannerMessage={messageBanner}
      />
      <ServicesArea />
      <AppointmentSection />
      <BlogSection />
      <OurCertifications />
    </div>
  );
};

export default HomePage;
