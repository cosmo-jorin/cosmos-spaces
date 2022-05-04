import React from "react";
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

import {nickname,twitter,images,info} from "./TeamInformation.jsx";

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var image = images[this.props.name];
    var nick = nickname[this.props.name];
    var information = info[this.props.name];
    var link = twitter[this.props.name];
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        unmountOnExit
        classNames="team-member"
      >
      <div className={"team-member"} onClick={this.props.onClose}>
        <div className="team-member-body" onClick={e => e.stopPropagation()}>
          <a href={link} target="_blank">
            <img id={this.props.name} src={image} alt={this.props.name}/>
          </a>
          <h1>{nick}</h1>
          <p>{information}</p>
        </div>
      </div>
      </CSSTransition>
    );
  }
}

TeamMember.defaultProps = {
  name: "",
  show: false,
  onClose: null,
}

export default TeamMember;
