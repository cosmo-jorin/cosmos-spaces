import React from "react";
import ValidatorsInformation from "./ValidatorsInformation.jsx";
import ValidatorsRunning from "./ValidatorsRunning.jsx";


class ValidatorsContent extends React.Component {

  render() {
    return (
      <div className='validators'>
        <ValidatorsInformation/>
        <ValidatorsRunning/>
        </div>
    );
  }
}


export default ValidatorsContent;
