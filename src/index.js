import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="App">
      <Components.Navbar />
      <Components.Cover />
      <Components.WhoWeAre />
      <Components.WhatWeDo />
      <Components.News />
      <Components.Gallery />
      <Components.Donate />
      <Components.Projects />
      <Components.OperatingMode />
      <Components.Footer />
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div id="AboutUsPage">
      <Components.Navbar />
      <Components.AboutUs />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);
