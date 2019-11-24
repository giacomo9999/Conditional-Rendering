import React, { Component } from "react";

const boardStyle = {
  backgroundColor: "#B85400"
};

class Gameboard extends Component {
  render() {
    return (
      <div className="container-inner" style={boardStyle}>
        <h2>I Am The Gameboard Component</h2>
        <div className="spacer10"></div>
        <button onClick={this.props.toggleLoginPanel}>
          Switch to Login Button
        </button>
      </div>
    );
  }
}
export default Gameboard;
