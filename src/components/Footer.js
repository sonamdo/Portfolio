import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div id = "footer" className = "container">
    <p>Want to know more about me? Check out my
      <a href="https://linkedin.com/pub/sonam-klein/9b/412/558/"> Linkedin<FontAwesomeIcon icon={["fab", "linkedin"]} color="black" /> </a>
      or
      <a href="https://github.com/sonamdo"> Github<FontAwesomeIcon icon={["fab", "github-square"]} color="black"/></a> accounts.
    </p>
    <p className = "makeBold">sonamklein@gmail.com</p>
  </div>
)

export default Footer;
