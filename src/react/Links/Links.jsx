import React from "react";
import TitleBar from "../TitleBar.jsx";
import AboutContent from "../AboutContent.jsx";
import Footer from "../Footer.jsx";

class Links extends React.Component {

  render() {
    return (
      <div className='main'>
        <TitleBar />
        <div className="nothing-left"></div>
        <div className="links">
          <div className="portalRed"></div>
          <div className="portalBlue"></div>
        </div>
        <div className="nothing-right"></div>
        <Footer />
        </div>
    );
  }
}


export default Links;
