import React from 'react';
import './ProjectCard.scss';

import { AiFillFolder } from 'react-icons/ai';
import { RiGithubLine } from 'react-icons/ri';
import { GoLinkExternal } from 'react-icons/go';
import { motion } from 'framer-motion';
const ProjectCard = () => {
  return (
    <motion.div
      className="proCard"
      whileHover={{
        y: 5,
      }}
    >
      <div className="proCard-section">
        <AiFillFolder className="pro-icon" />
        <h2>Portfolio</h2>
        <span>
          <RiGithubLine className="shortIcon" />
          <GoLinkExternal className="shortIcon" />
        </span>
      </div>

      <p>Build this portfolio website using animations and clearfull Design.</p>
      <div className="proCard-section foot">
        <code>React js</code>
        <code>HTML</code>
        <code>SCSS</code>
        <code>Node Js</code>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
