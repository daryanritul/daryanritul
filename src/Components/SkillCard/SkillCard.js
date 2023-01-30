import { motion } from 'framer-motion';
import React from 'react';
import './SkillCard.scss';
const SkillCard = ({ percentage, skill }) => {
  return (
    <div className="skill">
      <div className="skill-text">
        <strong>{skill}</strong>
        <small>{percentage}%</small>
      </div>
      <div className="skill-bar">
        <motion.div
          className="bar"
          whileInView={{
            width: ['0%', `${percentage}%`],
            // scaleX: [0, 1],
            originX: 0,
          }}
          transition={{
            duration: 2,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
