import React from 'react';
import Banner from '../../../assets/images/home-font.png';
import BottomShape from '../../../assets/images/home-bottom-shape.png';
import LinkButton from 'src/components/ui/LinkButton';

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
              <div className="col-lg-6 col-md-12">
                <div className="main-banner-content">
                  <h1>{title}</h1>
                  <p>{textBannerMessage}</p>
                  <div className="banner-btn">
                    <LinkButton
                      href=""
                      className="default-btn-one"
                      text="About Us"
                    >
                      <span></span>
                    </LinkButton>
                    <LinkButton href="contact.html" text="Contact Us">
                      <span></span>
                    </LinkButton>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                  <img src={Banner} alt="image" />
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
