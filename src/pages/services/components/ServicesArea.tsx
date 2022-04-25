import React from 'react';
import { GiPistolGun, GiMedicines } from 'react-icons/gi';
import useLocateContext from 'src/hooks/useLocateContext';
import esLang from 'src/i18n/es';

const IconstList = [<GiPistolGun />, <GiMedicines />];
const ServicesArea = () => {
  const lang = useLocateContext();
  const services = lang.ourServicesProvided;

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              <h6>{lang.ourServicesSubHeader}</h6>
              <h2>{lang.ourServicesHeader}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map(({ title, descripcion }, inx) => (
            <div className="col-lg-6 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">{IconstList[inx]}</div>
                <h3>{title}</h3>
                <p>{descripcion}</p>
                <div className="services-btn-link">
                  <a href="#" className="services-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
