import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className = "flex-container" id = "navbar">
      <h1>Portfolio</h1>
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      </div>
    </div>
  </header>
);

export default Header;
