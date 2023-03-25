import React from 'react';
import './Contact.scss';

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillCodepenCircle,
} from 'react-icons/ai';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-title end">
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

export default Contact;
