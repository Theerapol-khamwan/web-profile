import React from 'react';

import Spline3D from './compronet/spline3D';
import Navbar from './compronet/Navbar';
import Expertise from './compronet/Expertise';
import AboutMe from './compronet/AboutMe';
import SomeBuilt from './compronet/SomeBuilt';

import '../src/App.css';

function App() {


  return (
    <>
      <Navbar />
      <Spline3D />
      <Expertise />
      <AboutMe />
      <SomeBuilt />
    </>
  );
}

export default App;
