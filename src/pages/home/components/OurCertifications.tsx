import React from 'react';
import SectionContainer from 'src/components/SectionContainer';
import parnerImg from 'src/assets/images/partner/client-1.png';

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
        <PartnerItem href="" partnerImg={parnerImg} />
        <PartnerItem href="" partnerImg={parnerImg} />
        <PartnerItem href="" partnerImg={parnerImg} />
        <PartnerItem href="" partnerImg={parnerImg} />
        <PartnerItem href="" partnerImg={parnerImg} />
      </div>
    </SectionContainer>
  );
};

export default OurCertifications;
