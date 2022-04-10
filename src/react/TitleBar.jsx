import React from "react";
import { Link } from "react-router-dom";

class TitleBar extends React.Component {

  render() {
    return (
      <div id='title-container' className='title-bar'>
        <div id="left">
          <Link to='/home'>
            <img id='title-bar-logo' src='/static/img/logo.png'/>
          </Link>
        </div>

        <div id="right">
          <ul id="title-bar-menu">
          <li><Link to='/'><button>Home</button></Link></li>
            <li><Link to='/AboutUs'><button>Spaces Team</button></Link></li>
            <li><Link to='/contact'><button>Validators</button></Link></li>
            <li><Link to='/Information'><button>Networks</button></Link></li>
            <li><Link to='/AboutUs'><button>Links</button></Link></li>
            <li><Link to='/Information'><button>Airdrops</button></Link></li>
            <li><Link to='/contact'><button>Contact</button></Link></li>
          </ul>
        </div>
      </div>
    );
  }

}


export default TitleBar;
