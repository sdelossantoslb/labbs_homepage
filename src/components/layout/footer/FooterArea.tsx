import React from 'react';
import useLocateContext from 'src/hooks/useLocateContext';
import SendEmailInput from '../../SendEmailInput';

const FooterArea = () => {
  const lang = useLocateContext();
  return (
    <section className="footer-subscribe-wrapper">
      {/* <div className="subscribe-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-content">
                <h2>Sign Up Our Newsletter</h2>
                <span className="sub-title">
                  We Offer An Informative Monthly Technology Newsletter - Check
                  It Out.
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <SendEmailInput textButton="Subscribe Now" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>
                <p>{lang.aboutUsDescription}</p>
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Servicios</h3>
                </div>
                <ul className="footer-quick-links">
                  {lang.ourServicesProvided.map((serv, k) => {
                    return (
                      <li key={k}>
                        <a href="#">{serv.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contacto</h3>
                </div>
                <div className="footer-info-contact">
                  {' '}
                  <i className="flaticon-phone-call"></i>
                  <h3>Phone</h3>
                  <span>
                    <a href="tel:0802235678"> (809)-620-7462</a>
                  </span>
                </div>
                {/* <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>
                    <a href="mailto:demo@example.com">demo@example.com</a>
                  </span>
                </div> */}
                <div className="footer-info-contact">
                  <i className="flaticon-placeholder"></i>
                  <h3>Address</h3>
                  <span>
                    Avenida México, #66, Gazcue, Santo Domingo, D.N. 10204
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterArea;
