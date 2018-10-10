import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className = "flex-container" id = "navbar">
        <NavLink to="/" activeClassName="is-active" exact={true} className = "headerLink">Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true} className = "headerLink">Portfolio</NavLink>
        <NavLink to="/skills" activeClassName="is-active" className = "headerLink">Skills</NavLink>
        <NavLink to="/contact" activeClassName="is-active" className = "headerLink">Contact</NavLink>
    </div>
  </header>
);

export default Header;
