import React from 'react';
import './Sidebar.scss';

import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiCode,
  FiMessageSquare,
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo__text">rd</div>
      </div>
      <div className="sidebar-nav">
        <div className="sidebar-nav__options">
          <FiHome />
        </div>
        <div className="sidebar-nav__options">
          <FiUser />
        </div>
        <div className="sidebar-nav__options">
          <FiBriefcase />
        </div>
        <div className="sidebar-nav__options">
          <FiFolder />
        </div>
        <div className="sidebar-nav__options">
          <FiCode />
        </div>
        <div className="sidebar-nav__options">
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
