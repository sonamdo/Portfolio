import React from 'react';

const Footer = () => (
  <div id = "footer" className = "container">
    <p>Want to know more about me?
      Check out my <a href="https://linkedin.com/pub/sonam-klein/9b/412/558/"><img src = {require("../images/linkedinIcon.png")} className = "icon"/>Linkedin</a> or <a href="https://github.com/sonamdo">Github</a> accounts.
    </p>
  </div>
)

export default Footer;
