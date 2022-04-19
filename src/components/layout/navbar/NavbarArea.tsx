import React from 'react';
import BranchArea from './BranchArea';
import NavbarMenu from './NavbarMenu';

const NavbarArea = () => {
  return (
    <div className="navbar-area">
      <div className="techvio-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <BranchArea />
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <NavbarMenu />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarArea;
