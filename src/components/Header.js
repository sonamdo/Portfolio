import React from 'react';

const Header = () => (
  <nav className = "navbar navbar-expand-lg bg-dark fixed-top" id ="headerNavbar">
    <div className = "container">
      <ul className = "navbar-nav">
        <li className = "nav-item active">
          <a className= "nav-link" href="#">Home</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#portfolioAnchor">Projects</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#skillsAnchor">Skills</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#courseAnchor">Courses</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;
