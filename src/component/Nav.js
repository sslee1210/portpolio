import React from "react";
import nav from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={nav.header}>
      <h1>성수</h1>
      <ul className={nav.menu}>
        <li>
          <a href="/">Works</a>
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
