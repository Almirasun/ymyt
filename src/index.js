import React, { Component } from "react";
import ReactDOM from "react-dom";

import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
