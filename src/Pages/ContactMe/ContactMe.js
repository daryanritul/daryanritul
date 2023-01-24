import React from 'react';
import { Element } from 'react-scroll';
import './ContactMe.scss';

const ContactMe = () => {
  return (
    <Element
      className="contactme"
      name="contact"
      smooth={true}
      offset={50}
      duration={500}
    >
      <p>Conact Me</p>
    </Element>
  );
};

export default ContactMe;
