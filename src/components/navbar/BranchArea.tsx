import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png';
const BranchArea = () => {
  return (
    <Link className="navbar-brand" to={'index.html'}>
      <img src={logo} className="white-logo" alt="logo" />
    </Link>
    // <div className="techvio-responsive-nav">
    //   <div className="container">
    //     <div className="techvio-responsive-menu">
    //       <div className="logo">
    //         <Link to={"index.html"}>
    //           <img
    //             src="assets/img/logo.png"
    //             className="white-logo"
    //             alt="logo"
    //           />
    //           <img
    //             src="assets/img/logo-black.png"
    //             className="black-logo"
    //             alt="logo"
    //           />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BranchArea;
