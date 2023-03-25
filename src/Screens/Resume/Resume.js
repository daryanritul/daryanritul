import React from 'react';
import './Resume.scss';

import { SlBriefcase } from 'react-icons/sl';
import { RiToolsLine } from 'react-icons/ri';
import EducationCard from '../../Components/EducationCard/EducationCard';
import SkillCard from '../../Components/SkillCard/SkillCard';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-title">
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
  );
};

export default Resume;
