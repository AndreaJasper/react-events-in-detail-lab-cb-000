import React from 'react'

class CoordinatesButtons extends React.Component {
  
  clickHandler = (event) => this.props.onReceiveCoordinates([even.clientX, event.clientY])
  
  render() {
    return(
      <button onClick={this.clickHandler}>This is a button</button>
    );
  }
}

export default CoordinatesButtons;