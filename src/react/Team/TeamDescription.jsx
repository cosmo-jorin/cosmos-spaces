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
        <h1>The Cosmos Spaces team</h1>
 enim lacus accumsan ligula, id malesuada dui massa tincidunt ex. Curabitur blandit dui eu diam suscipit, vitae blandit nisi egestas. Suspendisse pellentesque dolor sed mi ultrices tincidunt. Quisque eleifend felis eget accumsan tristique. Nam finibus posuere cursus. Nunc rhoncus sagittis turpis ac elementum. Suspendisse dignissim augue mattis urna tempus, vitae elementum nisl sodales. Etiam nec dui erat. In feugiat semper pharetra. Donec nec convallis sapien.Morbi luctus ante facilisis justo vehicula efficitur. Aliquam erat volutpat. Praesent efficitur lectus eget nunc varius sagittis. Mauris neque nisi, tristique et facilisis ac, ullamcorper ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ac pharetra quam, ut posuere magna. Vestibulum sollicitudin sodales tellus, ac interdum enim rutrum vel. Cras finibus a arcu commodo ullamcorper. Vestibulum pulvinar semper magna in porttitor.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut non felis et elit mattis aliquam. Ut eu pulvinar dolor. Duis egestas congue accumsan. Duis cursus maximus porttitor. Integer vehicula ullamcorper eleifend. Cras ultricies ipsum in mauris ullamcorper, sit amet bibendum tortor imperdiet. Integer euismod sollicitudin libero, at aliquam nibh efficitur ac
      </div>
  );
  }
}
export default TeamDescription;
