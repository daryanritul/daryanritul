import React from 'react';
import Header from '../../Components/Header/Header';
import './Home.scss';

import About from '../About/About';
import TextShpere from '../../Components/TextSphere/TextShpere';

import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollYProgress, scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 300], [0, 700]);
  return (
    <div className="home">
      <div className="home-body">
        <motion.h1
          className="watermark"
          style={{
            y,
          }}
        >
          RITUL DARYAN
        </motion.h1>
        <div className="home-left">
          <motion.div
            className="home-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 3,
            }}
          >
            <div className="greet">Hi,</div>
            <motion.div className="title" whileHover={{}}>
              I'm
              <strong> RITUL DARYAN</strong>
            </motion.div>
            <div className="subtitle">
              Front-end Developer, UI/UX Designer and Student.
            </div>
            {/* <div className="home-btn"> */}
            <motion.button
              className="homeBtn primary"
              whileTap={{
                scale: 1.05,
              }}
            >
              Know More
            </motion.button>
            {/* </div> */}
          </motion.div>
        </div>
        <motion.div className="home-right">
          <TextShpere />
        </motion.div>
      </div>
      <div className="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
