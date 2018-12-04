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
          <div className = 'container'>
            <div className = 'row'>
              <div className = 'col-sm-1'> <FontAwesomeIcon icon={["fab", "facebook-f"]} /> </div>
              <div className = 'col-sm-1'> <FontAwesomeIcon icon={["fab", "twitter"]} /> </div>
              <div className = 'col-sm-1'> <FontAwesomeIcon icon={["fab", "linkedin-in"]} /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
