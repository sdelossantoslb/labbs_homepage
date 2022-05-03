import React from 'react';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import AppointmentImage from 'src/assets/images/appointme.svg';
import OverViewContent from 'src/components/OverViewContent';
import OnlineAppointmentButton from 'src/pages/pages-components/OnlineAppointmentButton';

const message = `Puede realizar su cita de manera online para reducir su tiempo de espera y realizar su proceso balistico de una manera rápida y organizada.`;

const AppointmentSection = () => {
  return (
    <SectionContainer enableBgGrey={false}>
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
