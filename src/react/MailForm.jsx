import React from 'react';
import axios from "axios";

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mail: '', message: '', canSend:true, sentMail: false, actual: [] };
    this.updateInput = this.updateInput.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  updateInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  sayHello() {
    const message = this.state.message.replace(/\n/, '<br/>');
    const mail = this.state.mail;
    if (message!=''){
    axios.post('http://XXX.com/api/sendMail', {
      mail: mail,
      message: message
    }
    ).then((response) => {
      this.setState({sentMail:true,canSend:true});
    }, (error) => {
      if (error.request.status==400) this.setState({canSend:false, sentMail:false});
    });}
    else{
      this.setState({canSend:false, sentMail:false})
    }
  }

  render() {
    return (
      <div className="mail-form">
        <input
          name="mail"
          placeholder="your@mail.com"
          type="email"
          aria-describedby="emailHelp"
          onChange={this.updateInput}
          required
        />
        <textarea
          placeholder="Here goes your message."
          rows="3"
          name="message"
          onChange={this.updateInput} required/>
        <div className="contactButton">
          {this.state.sentMail ? null : <button type="button" onClick={this.sayHello}>
            Say hello!
            </button>}
            {this.state.canSend ? null : <small>Oops! You missed your message or maybe is wrong written your mail!</small>}
            {this.state.sentMail ? <small>Thanks! I will answer you ASAP :)</small> : null}
        </div>
      </div >
    )
  }
}

export default MailForm;