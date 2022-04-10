import React from "react";
import axios from "axios";

class IndexContent extends React.Component {
  render() {
    return (
      <div className="index-content">
        <div className="sky" style={{transform: "rotate(45deg)"}}>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="index-main-block">
            <div>
              <h1>Title</h1>
              <p>Content</p>
            </div>
        </div>
      </div>
    );
  }

}


export default IndexContent;
