import React from "react";
import TeamLogo from "./TeamLogo.jsx";
import TeamCarrousel from "./TeamCarrousel.jsx";
import TeamDescription from "./TeamDescription.jsx";

class TeamContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div className="team">
        <TeamLogo/>
        <TeamDescription/>
        <TeamCarrousel/>
      </div>
  );
  }
}
export default TeamContent;
