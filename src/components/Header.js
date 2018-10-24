import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
  <div id = "navbarContainer">
    <ul className = "flex-container" id = "navbar">
        <h2 className = "align-left"><img src = {require("../images/logoSmall.png")} id = "logoSmall"/></h2>
        <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#homeAnchor">Home</a></li>
        <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#portfolioAnchor">Portfolio</a></li>
        <li activeClassName="is-active" className = "headerLink"><a href="#skillsAnchor">Skills</a></li>
        <li activeClassName="is-active" className = "headerLink"><a href="#courseAnchor">More</a></li>
    </ul>
  </div>
  </header>
);

export default Header;
