import React from 'react';
import OverViewContent from 'src/components/OverViewContent';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import ourVisionImage from 'src/assets/images/ourVisionImage.svg';
import OverViewImage from 'src/components/OverViewImage';

const vision = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

const OurVisionArea = () => {
  return (
    <SectionContainer>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewContent subTitle="Sobre Nosotros" title="Nuestra Visión">
            <p>{vision}</p>
          </OverViewContent>
        </div>
        <div className="col-md-6">
          <OverViewImage imageSrc={ourVisionImage} />
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default OurVisionArea;
