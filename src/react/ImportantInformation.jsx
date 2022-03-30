import React from "react";
import TitleBar from "./TitleBar.jsx";
import Footer from "./Footer.jsx";

class ImportantInformation extends React.Component {

  render() {
    return (
      <div className='portfolio'>
        <TitleBar />
        <div className="nothing-left"></div>
        Information
        <div className="nothing-right"></div>
        <Footer />
        </div>
    );
  }
}


export default ImportantInformation;
