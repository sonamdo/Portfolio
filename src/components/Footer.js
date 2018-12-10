import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className = "footer footer-light text-center">
    <div className = 'container'>
      <div className = 'row'>
        <div className = 'col-sm-4'>
          sonamklein@gmail.com
        </div>
        <div className = 'col-sm-4'>
        </div>
        <div className = 'col-sm-4'>

          <a href = "https://github.com/sonamdo" className = "iconWhite">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>

          <a href = "https://codepen.io/Sonamdo/" className = "iconWhite">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>

          <a href = "https://www.linkedin.com/in/sonam-klein/" className = "iconWhite">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>

        </div>
      </div>
    </div>
  </footer>
)

export default Footer
