import React from 'react';
import OverViewImage from 'src/components/OverViewImage';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import LinkButton from 'src/components/ui/LinkButton';
import ButtonPagoRenovacion from 'src/pages/pages-components/ButtonPagoRenovacion';
import ButtonPagoTraspaso from 'src/pages/pages-components/ButtonPagoTraspaso';
import style from 'styled-components';
const message = `Realice su pago balistico online, de manera rapida y segura sin tener que hacer filas de espera`;

const LinealContent = style.div`
  display:flex;
  flex-direction: row;
`;
const PagoOnlineSection = () => {
  return (
    <SectionContainer
      enableBgGrey={true}
      sectionSubTitle="Pagos Online"
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
      className="center-content"
      contentClassName="center-content"
      sectionTitle="Realice sus pagos online"
    >
      <p>{message}</p>
      <br />
      <LinealContent>
        <ButtonPagoRenovacion />
        <ButtonPagoTraspaso />
      </LinealContent>
    </SectionContainer>
  );
};

export default PagoOnlineSection;
