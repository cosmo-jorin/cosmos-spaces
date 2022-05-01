import React from "react";
import axios from "axios";

class TeamDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div className="team-description">
        <h1>The Cosmos Spaces Team</h1>
        <p>
          Cosmos Spaces is a team that focuses on growing the Cosmos ecosystem by onboarding new users and showing how protocols work through dialogue (Twitter spaces) and live demonstrations (Discord). 
        </p>
        <p>
          Cosmos Spaces began in early 2022 with a series of talks on Twitter spaces. <br/>
          This led to the formation of our communities on Telegram and Discord. 
        </p>
        <p>
          Currently we are looking for ways to always add value, education and support to the Cosmos community.
        </p>
        <p>
          This is why we have begun to validate on different blockchains in the ecosystem. A portion of the commissions are set aside for our awesome community.
        </p>
      </div>
  );
  }
}
export default TeamDescription;
