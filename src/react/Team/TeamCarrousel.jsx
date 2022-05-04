import React from "react";
import TeamMember from "./TeamMember.jsx";

const twitter={
  "hoss":"https://twitter.com/CosmosHOSS",
  "tricky":"https://twitter.com/TrickyCrypto2",
  "gainz":"https://twitter.com/lilgainzz",
  "erik":"https://twitter.com/erikchain_io",
  "clay":"https://twitter.com/CosmoClay_"
}

const images={
  "hoss":"./static/img/members/hoss.jpeg",
  "tricky":"./static/img/members/tricky.jpeg",
  "gainz":"./static/img/members/gainz.jpeg",
  "erik":"./static/img/members/erik.jpeg",
  "clay":"./static/img/members/clay.jpeg_"
}


class TeamCarrousel extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      show: false,
    };
    this.memberCard = this.memberCard.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onClose() {
    this.setState({
      show: false
    });  }

  memberCard(event) {
    if (!this.props.show){
      this.setState({
        show: true,
        name:event.target.id
      });
    }
    else {
      this.setState({
        show: false,
      });
    }
    console.log(event.target.id);
    ;
  }

  render() {
    return (
      <>
        <div className="team-carrousel">
            <button id="hoss" onClick={this.memberCard}>
              <img id="hoss" src="./static/img/members/hoss.jpeg" alt="hoss"/>
            </button>
            
            <button id="tricky" onClick={this.memberCard}>
              <img id="tricky" src="./static/img/members/tricky.jpeg" alt="tricky"/>
            </button>
                      
            <button id="gainz" onClick={this.memberCard}>
              <img id="gainz" src="./static/img/members/gainz.jpeg" alt="gainz"/>
            </button>         
                      
            <button id="erik" onClick={this.memberCard}>
              <img id="erik" src="./static/img/members/erik.jpeg" alt="erik"/>
            </button>         
                      
            <button id="clay" onClick={this.memberCard}>
              <img id="clay" src="./static/img/members/clay.jpeg" alt="clay"/>
            </button>

            <TeamMember name={this.state.name} show={this.state.show} onClose={this.onClose}/>
        
        </div>
      </>
    );
  }
}
export default TeamCarrousel;
