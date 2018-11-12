import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  $(document).ready(function() {
    $('#hamburger').click(function(){
      $('ul').toggleClass('open');
      $('#navbarContainer').css('display','block');
      $('.headerLink').css('display','block')
    });
  });

  return(
    <header>
    <div id = "navbarContainer">
      <ul id = "navbar">
          <h2 className = "align-left"><img src = {require("../images/logoSmall.png")} id = "logoSmall"/></h2>
          <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#homeAnchor">Home</a></li>
          <li activeClassName="is-active" exact={true} className = "headerLink"><a href="#portfolioAnchor">Portfolio</a></li>
          <li activeClassName="is-active" className = "headerLink"><a href="#skillsAnchor">Skills</a></li>
          <li activeClassName="is-active" className = "headerLink"><a href="#courseAnchor">More</a></li>
          <li id = "hamburger"><a href="javascript:void(0);"><FontAwesomeIcon icon="bars" /></a></li>
      </ul>
    </div>
    </header>
  )
}

export default Header;
