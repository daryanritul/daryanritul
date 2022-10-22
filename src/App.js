import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
const App = () => {
  return (
    <div className="app">
      <Home />
      <div className="body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
