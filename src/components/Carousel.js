import React from 'react';
import $ from 'jquery';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {

  render(){
    var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint:600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3500,
          dots: true,
          arrows: false
        },
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3500,
          dots: true,
          arrows: false
        },
      }
    ]
  }

  return (
    <Slider {...settings}>
              <div className = "co">
                <div className = "thumbnail">
                  <a href = "https://afternoon-taiga-41331.herokuapp.com/">
                    <img src = {require("../images/weatherScreencap.png")} alt = "Weather Website" />
                  </a>
                  <p className = "makeBold">Weather Website</p>
                  <p className = "description">A single page application which detects your location and makes an api call to let you know the weather. One of my first front end projects, I recently deployed it with Heroku for Back End Practice</p>
                </div>
              </div>
              <div className = "co">
                <div className = "thumbnail">
                  <a href = "https://codepen.io/Sonamdo/full/VWJZaN/">
                    <img src = {require("../images/skitraderScreencap.png")} alt = "Ebay Store Page" />
                  </a>
                  <p className = "makeBold">SkiTraderStore</p>
                  <p className = "description">A template made for product listings for Ebay store SkiTrader. Built with only HTML and CSS due to Ebay restrictions, it loads product information from Lightspeed and deploys through Channel Advisor</p>
                </div>
              </div>
              <div className = "co">
                <div className = "thumbnail">
                  <a href = "https://protected-brook-65884.herokuapp.com/">
                    <img src = {require("../images/pomodoroScreencap.png")} alt = "Pomodoro Clock" />
                  </a>
                  <p className = "makeBold">Pomodoro Clock</p>
                  <p className = "description">Made for a FreeCodeCamp assignment, I recently deployed this single page web application with Heroku as Back End practice.</p>
                </div>
              </div>
              <div className = "co">
                <div className = "thumbnail">
                    <a href = "https://codepen.io/Sonamdo/pen/mwpBQj">
                    <img src = {require("../images/pacmanScreencap.png")} alt = "Simple Simon Game" />
                  </a>
                  <p className = "makeBold">Simple Simon Game</p>
                  <p className = "description">What was originally an assignment for FreeCodeCamp to make a simple simon turned in to CSS practice as I decided to "draw" all my images in CSS. </p>
                </div>
              </div>
              <div className = "co">
                <div className = "thumbnail">
                  <a href = "https://limitless-everglades-52312.herokuapp.com/">
                    <img src = {require("../images/chatScreencap.png")} alt = "Chat App" />
                  </a>
                  <p className = "makeBold">Chat App</p>
                  <p className = "description">A simple chat application made for Andrew Meads Node.js course on Udemy. Built with Express and Socket.io and deployed with Heroku</p>
                </div>
              </div>
              <div className = "co">
                <div className = "thumbnail">
                  <a href = "https://github.com/sonamdo">
                    <img src = {require("../images/github.png")} alt = "Github" />
                  </a>
                  <p className = "makeBold">Github</p>
                  <p className = "description centerThis">More projects on Github</p>
                </div>
              </div>
    </Slider>
  )
}
}

export default SimpleSlider;
