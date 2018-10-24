import React from 'react';

const ContactPage = () => (
  <div className = "container">
    <div id = "contact">
      <h1 className = "sectionBanner">Get in touch</h1>
        <input type = "text" placeholder = "Name" id ="from" className = "contactForm" /><br />
        <input type = "text" placeholder = "Email" id = "email" className = "contactForm" /><br />
        <input type = "text" placeholder = "What's on your mind?" id = "message" className = "contactForm" /><br />
        <div id = "submit">
        <button type = "button" className = "btn btn-default">Submit</button>
        </div>
    </div>
  </div>
);

export default ContactPage;
