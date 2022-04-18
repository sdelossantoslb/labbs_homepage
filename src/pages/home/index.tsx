import React from 'react';
import AboutArea from './components/AboutArea';
import BlogSection from './components/BlogSection';
import CarrouselBanner from './components/CarrouselBanner';
import CounterArea from './components/CounterArea';
import OverviewArea from './components/OverViewArea';
import OverviewTrustUs from './components/OverviewTrustUs';
import ServicesArea from './components/ServicesArea';

const messageBanner = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <CarrouselBanner
        title="IT Solutions & Business Services Company"
        textBannerMessage={messageBanner}
      />
      <ServicesArea />
      <AboutArea />
      <OverviewArea />
      <OverviewTrustUs />
      <CounterArea />
      <BlogSection />
    </div>
  );
};

export default HomePage;
