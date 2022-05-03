import React from 'react';
import PageTitleArea from 'src/components/PageTitleArea';
import ExpertTeamArea from './components/ExpertTeamArea';
import OurHistoryArea from './components/OurHistoryArea';
import OurMissionArea from './components/OurMissionArea';
import OurVisionArea from './components/OurVisionArea';
import imgAbout from 'src/assets/images/about/about_team.jpeg';
import DownloadDocuments from './components/DownloadDocuments';
import OurTeamContent from './components/OurTeamContent';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageTitleArea title="Sobre Nosotros" imgSrc={imgAbout} />
      <OurHistoryArea />
      <OurTeamContent />
      <DownloadDocuments />
      <ExpertTeamArea />
    </div>
  );
};

export default AboutPage;
