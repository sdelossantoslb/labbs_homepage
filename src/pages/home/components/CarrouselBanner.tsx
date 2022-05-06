import React from 'react';
import BottomShape from '../../../assets/images/home-bottom-shape.png';
import useLocateContext from 'src/hooks/useLocateContext';
import ContactButton from 'src/pages/pages-components/ContactButton';
import AboutButton from './AboutButton';

interface CarrouselBannerProps {
  title: string;
  textBannerMessage: string;
}

const CarrouselBanner = ({
  title,
  textBannerMessage
}: CarrouselBannerProps) => {

  return (
    <div className="home-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="main-banner-content center-content">
                  <h1>{title}</h1>
                  <p>{textBannerMessage}</p>
                  <div className="banner-btn">
                    <AboutButton />
                    <ContactButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="creative-shape">
        <img src={BottomShape} alt="svg shape" />
      </div>
    </div>
  );
};

export default CarrouselBanner;
