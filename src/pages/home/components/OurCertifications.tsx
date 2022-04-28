import React from 'react';
import SectionContainer from 'src/components/SectionContainer';
import cert1 from 'src/assets/images/certificaciones/ICONTEC.png';
import cert2 from 'src/assets/images/certificaciones/IQNet.png';
import cert3 from 'src/assets/images/certificaciones/ISO_9001.png';

const listCertificaciones = [cert1, cert2, cert3];
const PartnerItem = ({
  partnerImg,
  href
}: {
  partnerImg: string;
  href: string;
}) => {
  return (
    <div className="partner-item">
      <a href={href}>
        <img src={partnerImg} alt="image" />
      </a>
    </div>
  );
};

const OurCertifications = () => {
  return (
    <SectionContainer sectionTitle="Certificaciones" enableBgGrey={true}>
      <div className="partner-list">
        {listCertificaciones.map((img) => (
          <PartnerItem href="" partnerImg={img} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurCertifications;
