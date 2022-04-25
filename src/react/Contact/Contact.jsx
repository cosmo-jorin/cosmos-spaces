import React from "react";
import TitleBar from "../TitleBar.jsx";
import Footer from "../Footer.jsx";
import MailForm from "./MailForm.jsx";

class Contact extends React.Component {
  render() {
    return (
      <div className='main'>
          <TitleBar />
          <div className="nothing-left"></div>
          <div className="main-content">
            <h1>Contact us!</h1>
            <p>Here goes a generical message</p>
            <MailForm />
            <a target="_blank" href='https://twitter.com/CosmosSpacesESP'>
                    <img src='/static/img/twitter.svg' />
            </a>
          </div>
          <div className="nothing-right"></div>
          <Footer />
      </div >
    );
  }

}


export default Contact;
