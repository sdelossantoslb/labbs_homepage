import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';

const ButtonPagoTraspaso = () => {
  return (
    <div className="center-content">
      <LinkButton
        href="https://mipenlinea.gob.do/Servicios/Solicitudes/RenovacionArma.aspx?opc=2"
        enableHtmlLink={true}
        openNewTab={true}
        style={{ margin: '0 20px' }}
        text="Traspaso"
      />
      <div className="services-btn-link">
        <a
          href="https://mip.gob.do/traspaso-de-tenencia-y-porte-de-armas-de-fuego-para-persona-fisica/"
          className="services-link"
          target={'_blank'}
        >
          requisitos
        </a>
      </div>
    </div>
  );
};

export default ButtonPagoTraspaso;
