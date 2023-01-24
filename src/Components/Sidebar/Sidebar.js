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

import { Link, scroller } from 'react-scroll';

import scrollHandeler from '../../utils/scrollUtils';
import { useState } from 'react';

const Sidebar = () => {
  const [activeClass, setActiveClass] = useState('');
  const onClickLinkHandler = element => {
    scrollHandeler(element);
    setActiveClass(element);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div
          className="sidebar-logo__text"
          onClick={() => onClickLinkHandler('home')}
        >
          daryanritul.in
        </div>
      </div>
      <div className="sidebar-nav">
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'home' && 'active'
          }`}
          onClick={() => onClickLinkHandler('home')}
        >
          <FiHome className="icon" />
          <p>Home</p>
        </Link>
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'about' && 'active'
          }`}
          onClick={() => onClickLinkHandler('about')}
          activeClass="active"
        >
          <FiUser className="icon" />
          <p>About Me</p>
        </Link>
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'resume' && 'active'
          }`}
          onClick={() => onClickLinkHandler('resume')}
        >
          <FiBriefcase className="icon" />
          <p>Resume</p>
        </Link>
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'projects' && 'active'
          }`}
          onClick={() => onClickLinkHandler('projects')}
        >
          <FiFolder className="icon" />
          <p>Projects</p>
        </Link>
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'skills' && 'active'
          }`}
          onClick={() => onClickLinkHandler('skills')}
        >
          <FiCode className="icon" />
          <p>Skills</p>
        </Link>
        <Link
          className={`sidebar-nav__options ${
            activeClass === 'contact' && 'active'
          }`}
          onClick={() => onClickLinkHandler('contact')}
        >
          <FiMessageSquare className="icon" />
          <p>Contact Me</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
