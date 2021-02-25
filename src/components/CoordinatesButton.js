// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        let answer = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(answer)
    }

  render() {
    return (
      <div>
          <button onClick={this.handleClick}>Take the Shot!</button>
      </div>
    )
  }
}