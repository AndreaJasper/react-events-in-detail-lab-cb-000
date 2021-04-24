import React from 'react'

class CoordinatesButtons extends React.Component {
  
  render() {
    return(
      <div>
        {props.onReceiveCoordinates}
      </div>
    );
  }
}

export default CoordinatesButtons;