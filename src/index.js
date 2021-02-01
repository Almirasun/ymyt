import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Components.HomePage} />
        <Route path="/about-us" component={Components.AboutUsPage} />
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
