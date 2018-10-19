import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className = "flex-container" id = "navbar">
        <h2 className = "align-left">SK</h2>
        <li activeClassName="is-active" exact={true} className = "headerLink">Home</li>
        <li activeClassName="is-active" exact={true} className = "headerLink">Portfolio</li>
        <li activeClassName="is-active" className = "headerLink">Skills</li>
        <li activeClassName="is-active" className = "headerLink">Contact</li>
    </ul>
  </header>
);

export default Header;
