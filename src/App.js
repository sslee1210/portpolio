import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Works from "./component/Works";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <hr />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
