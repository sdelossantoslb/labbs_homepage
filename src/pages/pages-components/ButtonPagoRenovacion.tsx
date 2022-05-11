import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';
import useLocateContext from 'src/hooks/useLocateContext';

const ButtonPagoRenovacion = () => {
  const lang = useLocateContext();
  return (
    <div className="center-content">
      <LinkButton
        style={{ margin: '0 20px' }}
        enableHtmlLink={true}
        openNewTab={true}
        href="https://mipenlinea.gob.do/Servicios/Solicitudes/RenovacionArma.aspx?opc=1"
        text="Renovación"
      />
      <div className="services-btn-link">
        <a
          href="https://mip.gob.do/solicitud-de-renovacion-de-licencia-de-porte-y-tenencia-de-armas-de-fuego/"
          className="services-link"
          target={'_blank'}
        >
          {lang.requirementsLabel}
        </a>
      </div>
    </div>
  );
};

export default ButtonPagoRenovacion;
