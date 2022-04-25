import React from "react";
import IndexBanner from "./IndexBanner.jsx";
import IndexText from "./IndexText.jsx";

class IndexContent extends React.Component {
  render() {
    return (
      <>
        <div className="index-background">
          <div className="sky" style={{transform: "rotate(45deg)"}}>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        <div className="index-content">
          <IndexBanner/>
          <IndexText/>
        </div>
      </>
    );
  }

}


export default IndexContent;
