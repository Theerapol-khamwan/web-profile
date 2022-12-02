import React from 'react';

import Spline3D from './compronet/spline3D/spline3D';
import Navbar from './compronet/Navbar/Navbar';
import Expertise from './compronet/Expertise/Expertise';
import AboutMe from './compronet/AboutMe/AboutMe';
import AllSomeBuilt from './compronet/SomeBuilt/AllSomeBuilt';
import Footer from './compronet/Footer/Footer';
import ListProject from './compronet/ListProject/ListProject';

import '../src/App.css';

function App() {
  
  console.log('Hello there 👋');

  return (
    <>
      <Navbar />
      <Spline3D />
      <Expertise />
      <AboutMe />
      <AllSomeBuilt />
      <Footer />
    </>
  );
}

export default App;
