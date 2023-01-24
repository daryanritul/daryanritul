import React, { useEffect } from 'react';
import './Home.scss';

import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { SiGmail } from 'react-icons/si';
import { Element } from 'react-scroll';
import scrollHandeler from '../../utils/scrollUtils';

import {
  Css,
  ReactIcon,
  Figma,
  Firebase,
  Xd,
  Illustrator,
  Android,
  JavaScript,
  Java,
} from '../../assets/svg/svgImport';

const Home = () => {
  return (
    <Element
      className="home"
      name="home"
      smooth={true}
      offset={50}
      duration={500}
    >
      <div className="home-text">
        <div className="home-text__upperText">HI, THERE</div>
        <div className="home-text__mainText">
          I'M
          <span className="main">
            <span className="mainText">RITUL DARYAN</span>
            <span className="mainText-hover">RITUL DARYAN</span>
          </span>
        </div>
        <div className="home-text__tags">
          <div className="tag">Aspiring Web Developer</div>
          <div className="tag">Creative UI/UX Designer</div>
          <div className="tag">Android Developer</div>
        </div>
        <div className="home-text__lowerText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum
          iaculis eu non diam phasellus vestibulum lorem sed. Egestas sed sed
          risus pretium quam. Odio ut enim blandit volutpat. Nunc non blandit
          massa enim nec.
        </div>
        <div className="moreBtn" onClick={() => scrollHandeler('about')}>
          MORE ABOUT ME
        </div>
        <div className="socialIcons">
          <div className="socialIcons-icon">
            <SlSocialLinkedin />
          </div>
          <div className="socialIcons-icon">
            <SiGmail />
          </div>
          <div className="socialIcons-icon">
            <SlSocialGithub />
          </div>
        </div>
      </div>
      <div className="home-icons">
        <div className="circleBox">
          <div className="circleBox-circle one">
            <ReactIcon />
          </div>
          <div className="circleBox-circle two">
            <Android />
          </div>
          <div className="circleBox-circle six">
            <Figma />
          </div>
          <div className="circleBox-circle four">
            <Illustrator />
          </div>
          <div className="circleBox-circle five">
            <Xd />
          </div>
          <div className="circleBox-circle three">
            <Java />
          </div>
          <div className="circleBox-circle seven">
            <ReactIcon />
          </div>
          <div className="circleBox-circle eight">
            <Firebase />
          </div>
          <div className="circleBox-circle nine">
            <JavaScript />
          </div>
          <div className="circleBox-circle ten">
            <Css />
          </div>
        </div>
        <div className="badger">
          <div className="screen">
            <div className="screen-text">
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
            </div>
          </div>
          <div className="stand"></div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
