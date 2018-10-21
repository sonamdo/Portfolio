import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className = "flex-container" id = "navbar">
        <h2 className = "align-left">SK</h2>
        <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#navbar">Home</a></li>
        <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#portfolioAnchor">Portfolio</a></li>
        <li activeClassName="is-active" className = "headerLink"><a href="#skillsAnchor">Skills</a></li>
        <li activeClassName="is-active" className = "headerLink"><a href="#contactAnchor">Contact</a></li>
    </ul>
  </header>
);

export default Header;
