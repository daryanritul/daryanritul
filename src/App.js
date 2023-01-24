import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactMe from './Pages/ContactMe/ContactMe';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Skills from './Pages/Skills/Skills';

const App = () => {
  return (
    <div className="app">
      <Home />
      <div className="body">
        <Sidebar />
        <div className="pages">
          <About />
          <Resume />
          <Projects />
          <Skills />
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default App;
