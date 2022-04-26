import React from "react";
import TitleBar from "../TitleBar.jsx";
import Footer from "../Footer.jsx";

import ValidatorsContent from "./ValidatorsContent.jsx";

class Validators extends React.Component {

  render() {
    return (
      <div className='main'>
        <TitleBar />
        <div className="nothing-left"></div>
        <ValidatorsContent/>
        <div className="nothing-right"></div>
        <Footer />
        </div>
    );
  }
}


export default Validators;
