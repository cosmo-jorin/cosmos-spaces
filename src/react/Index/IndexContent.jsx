import React from "react";
import IndexBanner from "./IndexBanner.jsx";
import IndexCalendar from "./IndexCalendar.jsx";

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
          <IndexCalendar/>
        </div>
      </>
    );
  }

}


export default IndexContent;
