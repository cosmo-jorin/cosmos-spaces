import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{

  render(){
    return(
      <div className='footer'>
        <a href="https://cosmosspaces.medium.com/" target="_blank"> 
          <img src='/static/img/social/medium.svg' />
        </a>
        <a href="https://discord.com/invite/J8u7VPFc3T" target="_blank"> 
          <img src='/static/img/social/discord.svg' />
        </a>
        <a href="https://t.me/cosmostwitterspaces" target="_blank"> 
          <img src='/static/img/social/telegram.svg' />
        </a>
        <a href="https://twitter.com/Cosmos_Spaces" target="_blank"> 
          <img src='/static/img/social/twitter.svg' />
        </a>
    </div>
    );
  }

}


export default Footer;
