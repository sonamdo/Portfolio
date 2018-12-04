import React from 'react';
import $ from 'jquery';

const Contact = () => {

$(document).ready(function(){

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

    $("#submit").on("click",function(){

      var from = $("#from").val();
      var email = $("#email").val();
      var message = $("#message").val();

      if(validateEmail(email)){
        if (message.length == 0){
          alert("message required")
        }
        else{
          if (from.length == 0){
            alert("from field required")
          }
          else {
            // socket.emit('sendEmail',{
            //   from,
            //   email,
            //   message
            // });
            alert("Message sent, thanks for reaching out!")
          }
        }
      }
      else {
        alert("invalid email address");
        return
      }
    });

  });

  return(
    <div className = "container text-center" id = "contactContainer">
        <h3 id = "contact">Get in touch</h3>
        <input type = "text" placeholder = "Name" id ="from" class = "contactForm" /><br />
        <input type = "text" placeholder = "Email" id = "email" class = "contactForm" /><br />
        <input type = "text" placeholder = "Topic" id = "message" class = "contactForm" /><br />
      <button type = "button" class = "btn btn-default" id = "submit">Submit</button>
    </div>
  )
}

export default Contact;
