import React, { Component } from "react";

const loginStyle = {
  backgroundColor: "#4E046D"
};

class Login extends Component {
  render() {
    return (
      <div className="container-inner" style={loginStyle}>
        <h2>I Am The Login Component</h2>
        <div className="spacer10"></div>
        <button onClick={this.props.toggleLoginPanel}>
          Login
        </button>
      </div>
    );
  }
}
export default Login;
