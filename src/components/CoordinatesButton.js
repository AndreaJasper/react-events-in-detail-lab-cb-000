import React from 'react'

class CoordinatesButtons extends React.Component {
  
  clickHandler = (event) => this.props.onReceiveCoordinates([even.clientX, event.clientY])
  
  render() {
    return(
      
    );
  }
}

export default CoordinatesButtons;