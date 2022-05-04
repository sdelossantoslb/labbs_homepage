import React from 'react';
import SectionContainer from 'src/components/SectionContainer';
import cert1 from 'src/assets/images/certificaciones/ICONTEC.png';
import cert2 from 'src/assets/images/certificaciones/IQNet.png';
import cert3 from 'src/assets/images/certificaciones/ISO_9001.png';
import { Link } from 'react-router-dom';

const listCertificaciones: Array<{ link?: string; image: string }> = [
  {
    link: 'https://www.iso.org/iso-9001-quality-management.html',
    image: cert1
  },
  { link: 'https://www.iqnet-certification.com/', image: cert2 },
  { link: 'https://www.iso.org/iso-9001-quality-management.html', image: cert3 }
];
const PartnerItem = ({
  partnerImg,
  href
}: {
  partnerImg: string;
  href: string;
}) => {
  return (
    <div className="partner-item center-content" style={{ display: 'flex' }}>
      <a href={href} target="_blank">
        <img
          src={partnerImg}
          style={{ height: '200px', width: 'auto', maxWidth: 'inherit' }}
          alt="image"
        />
      </a>
    </div>
  );
};

const OurCertifications = () => {
  return (
    <SectionContainer sectionTitle="Certificaciones" enableBgGrey={true}>
      <div className="partner-list center-content">
        {listCertificaciones.map((img,inx) => (
          <PartnerItem key={inx} href={img.link ?? ''} partnerImg={img.image} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurCertifications;
