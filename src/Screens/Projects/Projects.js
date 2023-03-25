import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Projects.scss';

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
    </div>
  );
};

export default Projects;
