import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';
import ProgressBar from 'src/components/ui/ProgresBar';
import SkillContent, { SkillItem } from 'src/components/ui/SkillsContent';
import AboutImage from '../../../assets/images/about.jpg';

const AboutArea = () => {
  return (
    <section className="about-area bg-grey section-padding">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content">
              <div className="about-content-text">
                <h6>About Our Company</h6>
                <h2>
                  Providing your business with a quality IT service is our
                  passion.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam, nostrud
                </p>
                <SkillContent>
                  <SkillItem textTitle="IT Consulting" rightText="90%">
                    <ProgressBar percent={90} />
                  </SkillItem>
                  <SkillItem textTitle=" Virtual Workstation" rightText="75%">
                    <ProgressBar percent={90} />
                  </SkillItem>
                  <SkillItem textTitle="Managed IT Service" rightText="80%">
                    <ProgressBar percent={90} />
                  </SkillItem>
                  <SkillItem textTitle="IT Consulting" rightText="90%">
                    <ProgressBar percent={90} />
                  </SkillItem>
                </SkillContent>
                <div className="about-btn-box">
                  <LinkButton href="" text="Learn More">
                    <span></span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={AboutImage} alt="About image" />
              <div className="years-design">
                <h2>27</h2>
                <h5>Years Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
