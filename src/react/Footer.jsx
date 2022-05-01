import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{

  render(){
    return(
      <div className='footer'>
        <a href="https://cosmosspaces.medium.com/"> 
          <img src='/static/img/social/medium.svg' />
        </a>
        <a href="https://discord.com/invite/J8u7VPFc3T"> 
          <img src='/static/img/social/discord.svg' />
        </a>
        <a href="https://t.me/cosmostwitterspaces"> 
          <img src='/static/img/social/telegram.svg' />
        </a>
        <a href="https://twitter.com/Cosmos_Spaces"> 
          <img src='/static/img/social/twitter.svg' />
        </a>
    </div>
    );
  }

}


export default Footer;
