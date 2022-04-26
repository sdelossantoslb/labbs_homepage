import React from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import imgAbout from 'src/assets/images/about/about_team.jpeg';
import useLocateContext from 'src/hooks/useLocateContext';
import ServicesArea from './components/ServicesArea';

const ServicesPage: React.FC = () => {
  const lang = useLocateContext();
  return (
    <div>
      <PageTitleArea title={lang.ourServicesHeader} imgSrc={imgAbout} />
      <ServicesArea />
    </div>
  );
};

export default ServicesPage;
