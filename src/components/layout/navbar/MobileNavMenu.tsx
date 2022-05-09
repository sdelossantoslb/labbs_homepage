import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import BranchArea from './BranchArea';
import NavbarMenu from './NavbarMenu';

const MobileNavMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handelToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="techvio-responsive-nav">
      <div className="container">
        <div className="techvio-responsive-menu mean-container">
          <div className="logo" style={{ float: 'left' }}>
            <BranchArea />
          </div>
          <div className="mean-bar">
            <a
              href="#nav"
              className="meanmenu-reveal"
              onClick={() => handelToggleMenu()}
              style={{
                right: '0px',
                left: 'auto',
                textAlign: 'center',
                textIndent: '0px',
                fontSize: '30px',
                paddingTop: '3%',
                paddingBottom: '3%'
              }}
            >
              {isOpenMenu ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
            </a>
            {isOpenMenu && (
              <nav
                className="mean-nav"
                style={{ display: 'flex', marginTop: '80px' }}
              >
                <NavbarMenu itemClick={() => handelToggleMenu()} />
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
