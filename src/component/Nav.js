import React, { useState, useEffect } from 'react';
import nav from './Nav.module.css';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  const updateMedia = () => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={nav.header}>
      <h1>
        SUNG
        <br />
        <span>SOO</span>
      </h1>
      {isMobile && <button onClick={toggleMenu}>☰</button>}
      <ul className={isOpen || !isMobile ? nav.menu : nav.menuHide}>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
