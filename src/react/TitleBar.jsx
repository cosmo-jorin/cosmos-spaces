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
            <li><Link to='/Team'><button>Spaces Team</button></Link></li>
            <li><Link to='/Validators'><button>Validators</button></Link></li>
            <li><Link to='/Networks'><button>Networks</button></Link></li>
            <li><Link to='/Links'><button>Links</button></Link></li>
            <li><Link to='/Airdrops'><button>Airdrops</button></Link></li>
            <li><Link to='/Contact'><button>Contact</button></Link></li>
          </ul>
        </div>
      </div>
    );
  }

}


export default TitleBar;
