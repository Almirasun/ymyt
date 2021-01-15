import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import * as Components from "./components";

function App() {
  return (
    <div className="App">
      <Components.Cover />
      <Components.AboutUs />
      <Components.WhatWeDo />
      <Components.Navbar />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
