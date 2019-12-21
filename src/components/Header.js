import React from 'react';

const Header = () => (
  <nav className = "navbar navbar-expand-lg fixed-top" id ="headerNavbar">
    <div className = "container">
      <ul className = "navbar-nav">
        <li className = "nav-item active">
          <a className= "nav-link" href="#">HOME</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#portfolioAnchor">PROJECTS</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#skillsAnchor">SKILLS</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#courseAnchor">COURSES</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#contactAnchor">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;
