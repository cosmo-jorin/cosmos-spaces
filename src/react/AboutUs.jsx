import React from "react";
import axios from "axios";
import TitleBar from "./TitleBar.jsx";
import AboutContent from "./AboutContent.jsx";
import Footer from "./Footer.jsx";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div className='main'>
        <TitleBar />
        <div className="nothing-right"></div>
        <AboutContent />
        <div className="nothing-left"></div>
        <Footer />
      </div>
    );
  }
}
export default AboutUs;
