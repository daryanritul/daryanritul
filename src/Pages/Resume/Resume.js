import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Element } from 'react-scroll';
import PageTitle from '../../Components/PageTitle/PageTitle';
import './Resume.scss';

const Resume = () => {
  return (
    <Element
      className="resume"
      about="resume"
      smooth={true}
      offset={50}
      duration={500}
    >
      <PageTitle title="RESUME" />
      <div className="heading">
        <h2>EDUCATION</h2>
        <div className="download">
          <FiDownload />
          <p>Download Resume</p>
        </div>
      </div>
      <div className="content">
        <div className="education">
          <div className="education-box">
            <div className="education-heading">10th Class</div>
            <div className="education-year">2015 - 2016</div>
            <div className="education-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              veritatis laudantium nihil consequatur fuga quam voluptatibus.
            </div>
          </div>
          <div className="education-box">
            <div className="education-heading">12th Class</div>
            <div className="education-year">2017 - 2018</div>
            <div className="education-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              veritatis laudantium nihil consequatur fuga quam voluptatibus.
            </div>
          </div>
          <div className="education-box ">
            <div className="education-heading">
              bachelors of computer applications
            </div>
            <div className="education-year">2018 - 2021</div>
            <div className="education-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              veritatis laudantium nihil consequatur fuga quam voluptatibus.
            </div>
          </div>
          <div className="education-box ">
            <div className="education-heading">
              Masters of Computer Application
            </div>
            <div className="education-year">2021 - 2023</div>
            <div className="education-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              veritatis laudantium nihil consequatur fuga quam voluptatibus.
            </div>
          </div>
        </div>
        <div className="hobby"></div>
      </div>
    </Element>
  );
};

export default Resume;
