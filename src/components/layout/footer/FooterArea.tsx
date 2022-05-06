import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useLocateContext from 'src/hooks/useLocateContext';

const FooterArea = () => {
  const lang = useLocateContext();
  return (
    <section className="footer-subscribe-wrapper">
      <div className="footer-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Nosotros</h3>
                </div>
                <p>{lang.aboutUsDescription}</p>
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
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
                  <i className="flaticon-phone-call"></i>
                  <h3>Teléfono</h3>
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
                  <h3>Dirección</h3>
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
