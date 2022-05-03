import React from 'react';
import SectionContainer from 'src/components/SectionContainer';
import tempImage from 'src/assets/images/team/ceo.jpg';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import BoxImageContent from 'src/pages/pages-components/BoxImageContent';
import { GridRow } from 'src/components/ui/Bootstrap';
const TeamsData: Array<{
  image: string;
  name: string;
  position: string;
  networks: Array<{ icon: any; link: string }>;
}> = [
  {
    image: tempImage,
    name: 'Lic. Team Member Name',
    position: 'Founder, CEO',
    networks: [
      {
        icon: <FaFacebook />,
        link: 'wwww.facebook.com'
      },
      {
        icon: <FaTwitter />,
        link: 'www.twitter.com'
      }
    ]
  },
  {
    image: tempImage,
    name: 'Lic. Team Member Name',
    position: 'Founder, CEO',
    networks: [
      {
        icon: <FaFacebook />,
        link: 'wwww.facebook.com'
      },
      {
        icon: <FaTwitter />,
        link: 'www.twitter.com'
      }
    ]
  },
  {
    image: tempImage,
    name: 'Lic. Team Member Name',
    position: 'Founder, CEO',
    networks: [
      {
        icon: <FaFacebook />,
        link: 'wwww.facebook.com'
      },
      {
        icon: <FaTwitter />,
        link: 'www.twitter.com'
      }
    ]
  },
  {
    image: tempImage,
    name: 'Lic. Team Member Name',
    position: 'Founder, CEO',
    networks: [
      {
        icon: <FaFacebook />,
        link: 'wwww.facebook.com'
      },
      {
        icon: <FaTwitter />,
        link: 'www.twitter.com'
      }
    ]
  }
];

const ExpertTeamArea = () => {
  const RenderTeams = TeamsData.map((team, inx) => (
    <div className="col-lg-3 col-md-6">
      <BoxImageContent
        key={inx}
        imageSr={team.image}
        showFooter={true}
        footerSubTitle={team.position}
        footerTitle={team.name}
        showOverlapOptions={true}
        overLapOptions={team.networks.map((t) => ({
          link: t.link,
          icon: t.icon
        }))}
      />
    </div>
  ));
  return (
    <SectionContainer
      sectionTitle="Expert Team"
      enableBgGrey={true}
      sectionSubTitle="Team Members"
    >
      <GridRow>{RenderTeams}</GridRow>
    </SectionContainer>
  );
};

export default ExpertTeamArea;
