import React from "react";
import TitleBar from "./TitleBar.jsx";
import IndexContent from "./IndexContent.jsx";
import Footer from "./Footer.jsx";

class Index extends React.Component {

  render() {
    return (
      <div className='portrait'>
        <TitleBar />
        <IndexContent />
        <Footer />
      </div>
    );
  }

}


export default Index;
