import React from 'react';
import SectionContainer from '../../../components/SectionContainer';

const OverviewTrustUs = () => {
  return (
    <SectionContainer className="overview-section pt-70 pb-100">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="overview-content">
            <h6>WHY TRUST US?</h6>
            <h2>
              Achieve digital transformation for your retail business services
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="features-list">
              <li>
                {' '}
                <span>Protect your Business</span>
              </li>
              <li>
                {' '}
                <span>Network Security</span>
              </li>
              <li>
                {' '}
                <span>Data Security</span>
              </li>
              <li>
                {' '}
                <span>Small Business Owners</span>
              </li>
              <li>
                {' '}
                <span>Running your Business</span>
              </li>
              <li>
                {' '}
                <span>Network Monitoring</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="overview-image-2">
            <img src="assets/images/choose-2.jpg" alt="image" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default OverviewTrustUs;
