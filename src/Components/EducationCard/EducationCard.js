import React from 'react';
import './EducationCard.scss';

import { AiOutlineCalendar } from 'react-icons/ai';
import { IoRadioButtonOnOutline } from 'react-icons/io5';

const EducationCard = ({ degree, stream, sYear, eYear }) => {
  return (
    <div className="education-card">
      <div className="radioBtn">
        <IoRadioButtonOnOutline className="edu-icon" />
        <div className="radioBtn-line"></div>
      </div>
      <h4>{degree}</h4>
      <small>{stream}</small>
      <small>
        <AiOutlineCalendar className="edu-icon" />
        {sYear} - {eYear}
      </small>
    </div>
  );
};

export default EducationCard;
