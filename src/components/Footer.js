import React from 'react';

const Footer = () => (
  <div id = "footer" className = "container">
    <p>Want to know more about me? Check out my
      <a href="https://linkedin.com/pub/sonam-klein/9b/412/558/"> Linkedin<img src = {require("../images/linkedinIcon.png")} className = "icon"/> </a>
      or
      <a href="https://github.com/sonamdo"> Github<img src = {require("../images/githubIcon.png")} className = "icon"/></a> accounts.
    </p>
    <p className = "makeBold">sonamklein@gmail.com</p>
  </div>
)

export default Footer;
