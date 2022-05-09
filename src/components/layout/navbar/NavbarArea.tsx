import React from 'react';
import OnlineAppointmentButton from 'src/pages/pages-components/OnlineAppointmentButton';
import BranchArea from './BranchArea';
import MobileNavMenu from './MobileNavMenu';
import NavbarMenu from './NavbarMenu';

const NavbarArea = () => {
  return (
    <div className="navbar-area">
      <MobileNavMenu />
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
