import React from 'react';
import './Header.scss';

import { MdMenu } from 'react-icons/md';

const Header = () => {
  return (
    <div className="header glass">
      <div className="header-logo">
        Daryan
        <span>ritul</span>.in
      </div>
      <div className="header-menu"></div>
    </div>
  );
};

export default Header;
