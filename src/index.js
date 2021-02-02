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
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Components.HomePage} />
        <Route path="/Ymyt/about-us" component={Components.AboutUsPage} />
        <Route path="/Ymyt/donateForm" component={Components.DonateGoogleForm} />
        <Route path="/Ymyt/requestForm" component={Components.RequestGoogleForm} />
        <Route path="/Ymyt/joinForm" component={Components.JoinGoogleForm} />
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
