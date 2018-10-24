import React from 'react';

const HomePage = () => (
  <div className = "banner" id = "homeAnchor">
    <div>
      <img src = {require("../images/logo.png")} id = "logo"/>
      <h1 className = "makeGrey">Ecommerce Specialist</h1>
      <h1>Full Stack Developer</h1>
    </div>
  </div>
);

export default HomePage;
