import React from "react";
import TitleBar from "../TitleBar.jsx";
import AboutContent from "../AboutContent.jsx";
import Footer from "../Footer.jsx";

class Validators extends React.Component {

  render() {
    return (
      <div className='main'>
        <TitleBar />
        <div className="nothing-left"></div>
        <AboutContent />
        <div className="nothing-right"></div>
        <Footer />
        </div>
    );
  }
}


export default Validators;
