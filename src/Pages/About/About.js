import React from 'react';
import { Element } from 'react-scroll';
import PageTitle from '../../Components/PageTitle/PageTitle';
import './About.scss';

const About = () => {
  return (
    <div
      className="about"
      name="about"
      smooth={true}
      offset={50}
      duration={500}
    >
      <PageTitle title="ABOUT ME" />
      <h2>
        I'm <span>Ritul Daryan</span>, Developer / Designer
      </h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
        reprehenderit expedita maiores tempora iusto quaerat. Nemo, natus velit
        ducimus, sapiente tempora molestias magnam, quaerat incidunt alias ipsa
        ratione molestiae? Asperiores corporis, modi animi est saepe sit
        dignissimos temporibus. Odit minima omnis dolorem officia velit
        laudantium doloribus. In, unde voluptatibus!
      </p>
      <h3 className="work-title">What I Love to Do?</h3>
      <div className="work">
        <div className="work-box">
          <div className="work-heading">WEB DEVELOPMENT</div>
          <p className="work-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptates iure adipisci voluptatem quas quaerat. Nobis hic aut,
            tempora dolore sit soluta consectetur in vitae consequatur et? Ipsa
            enim esse ducimus, est laborum maxime, natus aspernatur praesentium,
            id deleniti fugit.
          </p>
        </div>
        <div className="work-box">
          <div className="work-heading">MOBILE DEVELOPMENT</div>
          <p className="work-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptates iure adipisci voluptatem quas quaerat. Nobis hic aut,
            tempora dolore sit soluta consectetur in vitae consequatur et? Ipsa
            enim esse ducimus, est laborum maxime, natus aspernatur praesentium,
            id deleniti fugit.
          </p>
        </div>
        <div className="work-box">
          <div className="work-heading">UI/UX DESIGNING</div>
          <p className="work-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptates iure adipisci voluptatem quas quaerat. Nobis hic aut,
            tempora dolore sit soluta consectetur in vitae consequatur et? Ipsa
            enim esse ducimus, est laborum maxime, natus aspernatur praesentium,
            id deleniti fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
