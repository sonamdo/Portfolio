import React from 'react';
import emailjs from 'emailjs-com'

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleMessageChange = this.handleMessageChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
  	return (
      <div className = "container" id = "contact">
          <h2 className = "sectionBanner" id = "contactAnchor">Contact</h2>
      	<form className="test-mailing">
        	<div className = "form-row form-group">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-4">
              <input
                placeholder="Name"
                onChange={this.handleNameChange}
                className ="form-control"
              />
            </div>
            <div className="col-md-4">
              <input
                placeholder="Email"
                onChange={this.handleEmailChange}
                className ="form-control"
              />
            </div>
            <div className = "col-md-2">
            </div>
          </div>
          <div className = "form-row form-group" id ="contactMessage">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-8">
            	<textarea
              	id="test-mailing"
              	name="test-mailing"
              	onChange={this.handleMessageChange}
                className ="form-control"
              	placeholder="Message..."
              	required
              	value={this.state.feedback}
              	style={{width: '100%', height: '150px'}}
            	/>
            </div>
            <div className = "col-md-2">
            </div>
        	</div>
          <div className = "text-center">
        	<input id ="submitButton" type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
          </div>
      	</form>
      </div>
  	)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleMessageChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
    alert('Message Sent. Thanks for reaching out!')
    var templateParams = {
      to_name: "Sonam",
      from_name: this.state.name,
      from_email: this.state.email,
      message_html: this.state.feedback
  };

emailjs.send('gmail', 'template_contact_email', templateParams, 'user_nOYSgWXhnCkGASfNSVNuW')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
}
