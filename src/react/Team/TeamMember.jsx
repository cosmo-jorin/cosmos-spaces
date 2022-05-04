import React from "react";
import {nickname,twitter,images,info} from "./TeamInformation.jsx";

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show){
      return null;
    }
    var image = images[this.props.name];
    var nick = nickname[this.props.name];
    var information = info[this.props.name];
    var link = twitter[this.props.name];
    return (
      <div className="team-member" onClick={this.props.onClose}>
        <div className="team-member-body" onClick={e => e.stopPropagation()}>
          <img id={this.props.name} src={image} alt={this.props.name}/>
          <h1>{nick}</h1>
          <p>{information}</p>
        </div>
      </div>
    );
  }
}

TeamMember.defaultProps = {
  name: "",
  show: false,
  onClose: null,
}

export default TeamMember;
