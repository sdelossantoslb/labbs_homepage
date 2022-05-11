import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { GiPistolGun } from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';
import { BsCash } from 'react-icons/bs';
import SectionContainer from 'src/components/SectionContainer';
import { GridRow } from 'src/components/ui/Bootstrap';
import useLocateContext from 'src/hooks/useLocateContext';

const IconstList = [<GiPistolGun />, <MdOutlineScience />];
const ServicesArea = () => {
  const lang = useLocateContext();
  const services = lang.ourServicesProvided;

  return (
    <SectionContainer
      enableBgGrey={false}
      sectionTitle={lang.ourServicesHeader}
    >
      <GridRow>
        {services.map(({ title, descripcion, Price, TimeDuration }, inx) => (
          <div className="col-lg-6 col-md-6" key={inx}>
            <div className="single-services-item">
              <div className="services-icon">{IconstList[inx]}</div>
              <h3>{title}</h3>
              <p>{descripcion}</p>
              <br />
              <ul className="detail-list row-list">
                <li className="item">
                  <span>
                    <BsCash /> {lang.servicePriceLabel}
                  </span>{' '}
                  {Price}
                </li>
                <li className="item">
                  <span>
                    <FaRegClock /> {lang.serviceDureacionLabel}
                  </span>{' '}
                  {TimeDuration}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </GridRow>
    </SectionContainer>
  );
};

export default ServicesArea;
