import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{

  render(){
    return(
      <div className='footer'>
            <p><Link to="/">Contact</Link></p>
      </div>
    );
  }

}


export default Footer;
