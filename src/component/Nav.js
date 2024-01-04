import React, { useState, useEffect } from "react";
import nav from "./Nav.module.css";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [isOpen, setIsOpen] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={nav["header"]}>
      <h1>
        SUNG
        <br />
        <span>SOO</span>
      </h1>
      {isMobile && (
        <button
          className={`${nav.button} ${isOpen ? nav.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <ul className={`${nav.menu} ${isOpen ? nav.showMenu : ""}`}>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
