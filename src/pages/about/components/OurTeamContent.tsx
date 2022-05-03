import React from 'react';
import OverViewContent from 'src/components/OverViewContent';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import teampSvg from 'src/assets/images/team.svg';
import OverViewImage from 'src/components/OverViewImage';

const descripcion = `El LABBS está conformado por profesionales con más de 10 años de experiencia demostrada y 
actualizada en los procesos propios que interfieren en nuestras actividades laborales.`;

const OurTeamContent = () => {
  return (
    <SectionContainer enableBgGrey={true}>
      <GridRow className="align-items-center">
        <div className="col-md-6">
          <OverViewContent subTitle="Sobre Nosotros" title="Nuestra Gente">
            <p>{descripcion}</p>
          </OverViewContent>
        </div>
        <div className="col-md-6">
          <OverViewImage
            imageStyle={{ maxWidth: '300px' }}
            imageSrc={teampSvg}
          />
        </div>
      </GridRow>
    </SectionContainer>
  );
};

export default OurTeamContent;
