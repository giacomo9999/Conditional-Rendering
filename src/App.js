import React, { Component } from "react";
import Login from "./Login";
import Gameboard from "./Gameboard";

class App extends Component {
  state = { loginPanelOpen: true };

  toggleLoginPanel = () => {
    console.log("Toggling panel...");
    this.setState(prevState => ({ loginPanelOpen: !prevState.loginPanelOpen }));
  };

  render() {
    const isLoggedIn = this.state.loginPanelOpen;
    let componentToDisplay;

    if (isLoggedIn) {
      componentToDisplay = <Login toggleLoginPanel={this.toggleLoginPanel} />;
    } else {
      componentToDisplay = (
        <div>
          <Gameboard toggleLoginPanel={this.toggleLoginPanel} />
        </div>
      );
    }
    return (
      <div className="container-outer">
        <h3>I Am The App Component</h3>
        {componentToDisplay}
      </div>
    );
  }
}

export default App;
