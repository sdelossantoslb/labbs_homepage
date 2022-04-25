import React from 'react';
import OverViewContent from 'src/components/OverViewContent';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';

const history = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.
`;

const OurHistoryArea = () => {
  return (
    <SectionContainer
      sectionSubTitle="Cómo Iniciamos?"
      sectionTitle="Nuestra Historia"
    >
      <p>{history}</p>
    </SectionContainer>
  );
};

export default OurHistoryArea;
