import React, { Component } from "react";
import ReactDOM from "react-dom";

import Cover from "./components/cover/cover";
import Navbar from "./components/navbar/navbar";

import "./index.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <Cover />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
