import React from 'react';
import $ from 'jquery';

const Portfolio = () => {

$(document).ready(function() {
  if ( $(window).width() > 720) {
    $('.thumbnail').hover(function(){
      $(this).find('.thumbnailPic').hide();
      $(this).find('.thumbnailText').show();
    }, function() {
      $(this).find('.thumbnailPic').show();
      $(this).find('.thumbnailText').hide();
    })
  }
})

return (
  <div className = "container" id = "portfolio">
  <span id = "portfolioAnchor"></span>

  <h2 className = "sectionBanner">Projects</h2>

  <div className = "row portfolioRow">

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://afternoon-taiga-41331.herokuapp.com/">
            <img src = {require("../images/weatherScreencap.png")} alt = "Weather Website" />
          </a>
          <p className = "makeBold">Weather Website</p>
        </div>
        <a href = "https://afternoon-taiga-41331.herokuapp.com/">
        <div className = "thumbnailText">
          <p className = "makeBoldDesktop">Weather Website</p>
          <p className = "description">A single page application which detects your location and makes an api call to let you know the weather. One of my first front end projects, I recently deployed it with Heroku for Back End Practice</p>
        </div>
        </a>
      </div>
    </div>

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://codepen.io/Sonamdo/full/VWJZaN/">
            <img src = {require("../images/skitraderScreencap.png")} alt = "Ebay Store Page" />
            </a>
            <p className = "makeBold">SkiTrader Ebay Store</p>
          </div>
          <a href = "https://codepen.io/Sonamdo/full/VWJZaN/">
          <div className = "thumbnailText">
            <p className = "makeBoldDesktop">SkiTrader Ebay Store</p>
            <p className = "description">A template made for product listings for Ebay store SkiTrader. Built with only HTML and CSS due to Ebay restrictions, it loads product information from Lightspeed and deploys through Channel Advisor</p>
          </div>
          </a>
      </div>
    </div>

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://protected-brook-65884.herokuapp.com/">
            <img src = {require("../images/pomodoroScreencap.png")} alt = "Pomodoro Clock" />
          </a>
          <p className = "makeBold">Pomodoro Clock</p>
        </div>
        <a href = "https://protected-brook-65884.herokuapp.com/">
        <div className = "thumbnailText">
          <p className = "makeBoldDesktop">Pomodoro Clock</p>
          <p className = "description">Made for a Free Code Camp assignment, I recently deployed this single page web application with Heroku as Back End practice.</p>
        </div>
        </a>
      </div>
    </div>

    </div>

    <div className = "row portfolioRow">

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://codepen.io/Sonamdo/pen/mwpBQj">
            <img src = {require("../images/pacmanScreencap.png")} alt = "Simple Simon Game" />
          </a>
          <p className = "makeBold">Simple Simon Game</p>
        </div>
        <a href = "https://codepen.io/Sonamdo/pen/mwpBQj">
        <div className = "thumbnailText">
          <p className = "makeBoldDesktop">Simple Simon Game</p>
          <p className = "description">An assignment done for Free Code Camp to make a simple simon game. Both pacman and the ghosts are "drawn" in css code. </p>
        </div>
        </a>
      </div>
    </div>

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://limitless-everglades-52312.herokuapp.com/">
            <img src = {require("../images/chatScreencap.png")} alt = "Chat App" />
          </a>
          <p className = "makeBold">Chat App</p>
        </div>
        <a href = "https://limitless-everglades-52312.herokuapp.com/">
        <div className = "thumbnailText">
          <p className = "makeBoldDesktop">Chat App</p>
          <p className = "description">A simple chat application made for Andrew Meads Node.js course on Udemy. Built with Express and Socket.io and deployed with Heroku</p>
        </div>
        </a>
      </div>
    </div>

    <div className = "col-sm-4">
      <div className = "thumbnail">
        <div className = "thumbnailPic">
          <a href = "https://github.com/sonamdo">
            <img src = {require("../images/github.png")} alt = "Github" />
          </a>
          <p className = "makeBold">Github</p>
        </div>
        <a href = "https://github.com/sonamdo">
        <div className = "thumbnailText">
          <p className = "makeBoldDesktop">Github</p>
          <p className = "description centerThis">More projects on Github</p>
        </div>
        </a>
      </div>
    </div>
  </div>
  </div>
)
};

export default Portfolio;
