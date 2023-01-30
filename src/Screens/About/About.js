import React from 'react';
import './About.scss';

import { AiFillMobile } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { SlBriefcase } from 'react-icons/sl';
import { SiMinds } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';
import EducationCard from '../../Components/EducationCard/EducationCard';
import SkillCard from '../../Components/SkillCard/SkillCard';

const About = () => {
  return (
    <div className="about">
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
      <div className="about-journey">
        <div className="about-title">
          <p>My Qualification</p>
          Awsome Journey
        </div>
        <div className="journey">
          <div className="journey-head">
            <SlBriefcase className="journey-icon" />
            Education
          </div>
          <div className="journey-body">
            <EducationCard
              degree={'Master of Computer Application'}
              stream={'Computer Application'}
              sYear={2021}
              eYear={2023}
            />
            <EducationCard
              degree={'bachelor of computer application'}
              stream={'Computer Application'}
              sYear={2018}
              eYear={2021}
            />

            <EducationCard
              degree={'Higher Secondary Certificate'}
              stream={'Computer Science'}
              sYear={2017}
              eYear={2018}
            />
            <EducationCard
              degree={'Secondary School Certificate'}
              stream={'Computer Science'}
              sYear={2015}
              eYear={2016}
            />
          </div>
          <div className="journey-head">
            <RiToolsLine className="journey-icon" />
            Skills
          </div>
          <div className="journey-body">
            <SkillCard skill={'React Js'} percentage={75} />
            <SkillCard skill={'html'} percentage={80} />
            <SkillCard skill={'css'} percentage={80} />
            <SkillCard skill={'scss'} percentage={80} />
            <SkillCard skill={'Firebase'} percentage={70} />
            <SkillCard skill={'sql database'} percentage={50} />
            <SkillCard skill={'C++'} percentage={60} />
            <SkillCard skill={'Python'} percentage={60} />
            <SkillCard skill={'FIMGA'} percentage={60} />
            <SkillCard skill={'illustrator'} percentage={60} />
          </div>
        </div>
        <div className="journey-box"></div>
      </div>
    </div>
  );
};

export default About;
