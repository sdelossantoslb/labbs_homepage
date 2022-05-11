import React from 'react';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import HistoryImage from 'src/assets/images/history-img.svg';
import OverViewContent from 'src/components/OverViewContent';
import LinkButton from 'src/components/ui/LinkButton';

const message = `Puedes verificar tu histórico de pagos, renovaciones, y demas, solo accede al enlace debajo para consultar de manera simple y rápida`;

const ConsultaPagosSection = () => {
  return (
    <SectionContainer enableBgGrey={true}>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewImage imageSrc={HistoryImage} />
        </div>
        <div className="col-md-6">
          <OverViewContent title="Consultar Histórico">
            <p>{message}</p>
            <br />
            <LinkButton text="Consultar Histórico" href="/services" />
          </OverViewContent>
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default ConsultaPagosSection;
