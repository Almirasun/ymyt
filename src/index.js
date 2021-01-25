import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from './redux';
import * as ReactRedux from 'react-redux';
import * as Components from "./components";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Components.Navbar />
      <Components.Cover />
      <Components.AboutUs />
      <Components.WhatWeDo />
      <Components.News />
      <Components.Gallery />
      {/* <Components.Donate /> */}
    </div>
  );
}

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);
