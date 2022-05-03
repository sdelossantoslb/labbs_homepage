import React from 'react';
import OnlineAppointmentButton from 'src/pages/pages-components/OnlineAppointmentButton';
import BranchArea from './BranchArea';
import NavbarMenu from './NavbarMenu';

const NavbarArea = () => {
  return (
    <div className="navbar-area">
      <div className="techvio-responsive-nav">
        <div className="container">
          <div className="techvio-responsive-menu">
            <div className="logo">
              <BranchArea />
            </div>
          </div>
        </div>
      </div>
      <div className="techvio-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <BranchArea />
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <NavbarMenu />
              <div className="other-option">
                <OnlineAppointmentButton />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarArea;
