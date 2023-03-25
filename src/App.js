import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Screens/Home/Home';
import { motion, useScroll, useTransform } from 'framer-motion';
import About from './Screens/About/About';
import Projects from './Screens/Projects/Projects';
import Resume from './Screens/Resume/Resume';
import Contact from './Screens/Contact/Contact';

const App = () => {
  const { scrollYProgress, scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* <Header /> */}
      <motion.div className="app">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
};

export default App;
