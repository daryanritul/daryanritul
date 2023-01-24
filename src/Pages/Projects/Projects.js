import React from 'react';
import { Element } from 'react-scroll';
import './Projects.scss';

const Projects = () => {
  return (
    <Element
      className="projects"
      name="projects"
      smooth={true}
      offset={50}
      duration={500}
    >
      <p>Projects</p>
    </Element>
  );
};

export default Projects;
