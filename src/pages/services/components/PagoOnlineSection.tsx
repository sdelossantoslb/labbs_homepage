import React from 'react';
import SectionContainer from 'src/components/SectionContainer';
import ButtonPagoRenovacion from 'src/pages/pages-components/ButtonPagoRenovacion';
import ButtonPagoTraspaso from 'src/pages/pages-components/ButtonPagoTraspaso';
import style from 'styled-components';
const message = `Realice su pago balístico online, de manera rápida y segura sin tener que hacer filas de espera`;

const LinealContent = style.div`
  display:flex;
  flex-direction: row;
`;
const PagoOnlineSection = () => {
  return (
    <SectionContainer
      enableBgGrey={true}
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
