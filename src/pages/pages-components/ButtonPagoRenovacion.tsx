import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';

const ButtonPagoRenovacion = () => {
  return (
    <div className="center-content">
      <LinkButton
        style={{ margin: '0 20px' }}
        enableHtmlLink={true}
        openNewTab={true}
        href="https://mipenlinea.gob.do/Servicios/Solicitudes/RenovacionArma.aspx?opc=1"
        text="Pago de Renovación"
      />
      <div className="services-btn-link">
        <a
          href="https://mip.gob.do/solicitud-de-renovacion-de-licencia-de-porte-y-tenencia-de-armas-de-fuego/"
          className="services-link"
          target={'_blank'}
        >
          requisitos
        </a>
      </div>
    </div>
  );
};

export default ButtonPagoRenovacion;
