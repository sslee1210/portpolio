import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import Works from './component/Works';
import Skills from './component/Skills';
import Contact from './component/Contact';

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <hr />
      <Works />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
