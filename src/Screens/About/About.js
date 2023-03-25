import React from 'react';
import './About.scss';

import { AiFillMobile } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const yRange = useTransform(scrollY, [0, window.innerHeight / 2], [0, 0]);
  return (
    <motion.div
      className="about"
      style={
        {
          // y: yRange,
        }
      }
    >
      <div className="about-intro">
        <div className="about-title">
          <p>My Intro</p>
          About me
        </div>
        <div className="about-me">
          <p>
            I am a student with a passion for front-end development and UI/UX
            design. I possess a strong skill set in these areas, coupled with an
            innate ability to solve problems and pay attention to even the
            smallest details. In my free time, I enjoy sketching, reading
            novels, and playing video games.
            <br /> My curious nature keeps me up to date with new technologies,
            and I have the ability to quickly adapt and utilize these
            technologies to achieve my goals. Overall, I am driven to create
            aesthetically pleasing and functional designs that provide the best
            user experience possible.
          </p>
        </div>
      </div>
      <div className="about-introCard">
        <div className="about-card">
          <MdDesignServices className="about-icon" />
          <h2>UI/UX Designing</h2>
          <p>
            Create UI/UX Designig of web pages that stand out. Love to create
            creative designs.
          </p>
        </div>
        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h2>Front-End Development</h2>
          <p>
            I Make Websites of any complexity and write clear code that is easy
            to work with in the future.
          </p>
        </div>
        <div className="about-card">
          <AiFillMobile className="about-icon" />
          <h2>Mobile Friendly</h2>
          <p>
            A Responsive Design makes your website accessible to all users,
            regardless of their device.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
