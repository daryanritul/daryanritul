import React from 'react';
import Header from '../../Components/Header/Header';
import './Home.scss';

import About from '../About/About';
import TextShpere from '../../Components/TextSphere/TextShpere';

import { motion, useScroll, useTransform } from 'framer-motion';
import Projects from '../Projects/Projects';

const Home = () => {
  const { scrollYProgress, scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 300], [0, 700]);
  const yRange = useTransform(
    scrollY,
    [0, window.innerHeight / 2],
    [-200, 200]
  );
  return (
    <motion.div
      className="home"
      style={
        {
          // y: yRange,
          // position: 'fixed',
          // top: '50%',
          // left: '50%',
          // transform: 'translate(-50%, -50%)',
        }
      }
    >
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
    </motion.div>
  );
};

export default Home;
