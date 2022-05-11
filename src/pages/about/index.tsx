import React from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import ExpertTeamArea from './components/ExpertTeamArea';
import OurHistoryArea from './components/OurHistoryArea';
import imgAbout from 'src/assets/images/about/about_team.jpeg';
import DownloadDocuments from './components/DownloadDocuments';
import OurTeamContent from './components/OurTeamContent';
import { useLocation } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const lang = useLocation();
  return (
    <div>
      <PageTitleArea title="Sobre Nosotros" imgSrc={imgAbout} />
      <OurHistoryArea />
      <OurTeamContent />
      <DownloadDocuments />
      {/* <ExpertTeamArea /> */}
    </div>
  );
};

export default AboutPage;
