import React from "react";
import axios from "axios";
import Footer from "../Footer.jsx";
import TitleBar from "../TitleBar.jsx";
import TeamContent from "./TeamContent.jsx";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div className='main'>
        <TitleBar />
        <div className="nothing-right"></div>
        <TeamContent />
        <div className="nothing-left"></div>
        <Footer />
      </div>
    );
  }
}
export default Team;
