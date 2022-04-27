import React from "react";

class TeamLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div className="team-logo">
        <video loop={true} autoPlay="autoPlay" id="vid" muted>
          <source src="/static/img/spaceloop.mp4" type="video/mp4" />
          Your browser does not support videos.
        </video>
      </div>
    );
  }
}
export default TeamLogo;
