import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Projects.scss';

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillCodepenCircle,
} from 'react-icons/ai';
const Projects = () => {
  return (
    <div className="project">
      <h1 className="project-title">
        <p>My Work</p>
        Projects
      </h1>
      <div className="project-body">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <h1 className="project-title end">
        <p>You Have Reached the End</p>
        Contact Me
      </h1>
      <p className="endText">
        I am currently avilable for work, and looking for job apportunity. Drop
        me a email to reach me out. I Will try my best to get back to you.
      </p>
      <motion.button
        className="proBtn"
        whileTap={{
          scale: 1.05,
        }}
      >
        Reach Me
      </motion.button>
      <div className="footer">
        <div className="iconsLinks">
          <AiFillGithub className="socialIcon" />
          <AiFillDribbbleCircle className="socialIcon" />
          <AiFillInstagram className="socialIcon" />
          <AiFillTwitterCircle className="socialIcon" />
          <AiFillCodepenCircle className="socialIcon" />
        </div>
        <p>
          DESIGNED & BUILT BY <strong>RITUL DARYAN</strong>{' '}
        </p>
        <p>&#169; daryanritul.in 2023</p>
      </div>
    </div>
  );
};

export default Projects;
