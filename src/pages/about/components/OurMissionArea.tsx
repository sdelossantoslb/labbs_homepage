import React from 'react';
import OverViewContent from 'src/components/OverViewContent';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import ourMisionImage from 'src/assets/images/ourMisionImage.svg';

const mission = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

const OurMissionArea = () => {
  return (
    <SectionContainer>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewImage imageSrc={ourMisionImage} />
        </div>
        <div className="col-md-6">
          <OverViewContent subTitle="Sobre Nosotros" title="Nuestra Misión">
            <p>{mission}</p>
          </OverViewContent>
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default OurMissionArea;
