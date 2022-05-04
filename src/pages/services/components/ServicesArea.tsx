import React from 'react';
import { GiPistolGun, GiMedicines } from 'react-icons/gi';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import useLocateContext from 'src/hooks/useLocateContext';
import esLang from 'src/i18n/es';

const IconstList = [<GiPistolGun />, <GiMedicines />];
const ServicesArea = () => {
  const lang = useLocateContext();
  const services = lang.ourServicesProvided;

  return (
    <SectionContainer
      enableBgGrey={false}
      sectionTitle={lang.ourServicesHeader}
      sectionSubTitle={lang.ourServicesSubHeader}
    >
      <GridRow>
        {services.map(({ title, descripcion }, inx) => (
          <div className="col-lg-6 col-md-6" key={inx}>
            <div className="single-services-item">
              <div className="services-icon">{IconstList[inx]}</div>
              <h3>{title}</h3>
              <p>{descripcion}</p>
              <div className="services-btn-link">
                <a href="#" className="services-link">
                  Leer Mas
                </a>
              </div>
            </div>
          </div>
        ))}
      </GridRow>
    </SectionContainer>
  );
};

export default ServicesArea;
