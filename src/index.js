import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import {BrowserRouter, Route} from "react-router-dom";
import { createBrowserHistory } from 'history'; // I guess, from react-router
import "./index.scss";

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
        <Route exact path="/" component={Components.HomePage} />
        <Route path="/about-us" component={Components.AboutUsPage} />
        <Route path="/donateForm" component={Components.DonateGoogleForm} />
        <Route path="/requestForm" component={Components.RequestGoogleForm} />
        <Route path="/joinForm" component={Components.JoinGoogleForm} />
        <Route path="/visitForm" component={Components.VisitGoogleForm} />
        <Route path="/newsPage" component={Components.NewsPage} />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);
