import React from "react";
import axios from "axios";

class TeamCarrousel extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "gainz"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({name:event.target.value});
  }

  render() {
    return (
      <div className="team-carrousel">
          <label>
            <input type="radio" name="slider" value="hoss"></input>
            <img className='card' src="https://pbs.twimg.com/profile_images/1513942291253284868/7a2nAJWj_400x400.jpg" alt="hoss"/>
          </label><label>
            <input type="radio" name="slider" value="tricky" ></input>
            <img className='card' src="https://pbs.twimg.com/profile_images/1490144985097785344/JLpHGLP4_400x400.jpg" alt="tricky"/>
          </label><label>
            <input type="radio" name="slider" value="gainz"></input>
            <img className='card' src="https://pbs.twimg.com/profile_images/1519398398109143042/z2wUbBCT_400x400.jpg" alt="gainz"/>
          </label><label>
            <input type="radio" name="slider" value="erik" ></input>
            <img className='card' src="https://pbs.twimg.com/profile_images/1502806069541675015/nSGnwhhn_400x400.jpg" alt="erik"/>
          </label><label>
            <input type="radio" name="slider" value="clay" ></input>
            <img className='card' src="https://pbs.twimg.com/profile_images/1514828449856339972/dn0p3hTk_400x400.jpg" alt="clay"/>
          </label>
      </div>
    );
  }
}
export default TeamCarrousel;
