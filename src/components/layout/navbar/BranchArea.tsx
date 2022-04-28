import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/labbs_icon.webp';
const BranchArea = () => {
  return (
    <Link className="navbar-brand" to={'/'}>
      <img src={logo} className="white-logo" alt="logo" />
    </Link>
  );
};

export default BranchArea;
