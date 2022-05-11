import React from 'react';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import AppointmentImage from 'src/assets/images/appointme.svg';
import OverViewContent from 'src/components/OverViewContent';
import OnlineAppointmentButton from 'src/pages/pages-components/OnlineAppointmentButton';
import useLocateContext from 'src/hooks/useLocateContext';

const AppointmentSection = () => {
  const lang = useLocateContext();
  return (
    <SectionContainer enableBgGrey={false}>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewContent title="Realice su cita online">
            <p>{lang.appointmentMessage}</p>
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
