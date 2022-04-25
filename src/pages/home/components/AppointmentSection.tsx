import React from 'react';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import AppointmentImage from 'src/assets/images/appointme.svg';
import OverViewContent from 'src/components/OverViewContent';
import OnlineAppointmentButton from 'src/pages/pages-components/OnlineAppointmentButton';

const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua, magna aliqua. ipsum is simply dummy text of the
printing.`;

const AppointmentSection = () => {
  return (
    <SectionContainer enableBgGrey={true}>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewContent subTitle="Visitanos" title="Realice su cita online">
            <p>{message}</p>
            <br />
            <OnlineAppointmentButton />
          </OverViewContent>
        </div>
        <div className="col-md-6">
          <OverViewImage imageSrc={AppointmentImage} />
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default AppointmentSection;
