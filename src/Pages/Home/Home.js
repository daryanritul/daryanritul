import React from 'react';
import './Home.scss';

import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { SiGmail } from 'react-icons/si';

import { ReactComponent as Logo } from '../../assets/homeImage.svg';

const Home = () => {
  return (
    <div className="home">
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
        <div className="moreBtn">MORE ABOUT ME</div>
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
    </div>
  );
};

export default Home;
