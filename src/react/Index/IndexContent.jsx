import React from "react";
import IndexBanner from "./IndexBanner.jsx";
import IndexCalendar from "./IndexCalendar.jsx";

class IndexContent extends React.Component {
  render() {
    return (
      <div className="index-container">
        <div className="index-content">
        <div className="sky" style={{transform: "rotate(45deg)"}}>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          <IndexBanner/>
          <IndexCalendar/>
        </div>
      </div>
    );
  }

}


export default IndexContent;
