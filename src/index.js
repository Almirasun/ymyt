import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from './redux';
import * as ReactRedux from 'react-redux';
import * as Components from "./components";
import "./index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Components.Cover />
      <Components.WhoWeAre />
      <Components.WhatWeDo />
      {/* <Components.News /> */}
      <Components.Gallery />
      <Components.Donate />
      <Components.Projects />
      {/* <Components.Request /> */}
      <Components.OperatingMode /> 
    </>
  )
}

function App() {
  return (
    <div className="App">      
      
      <Router>  
        <Components.Navbar />   
        <Route path="/" component={Home} exact />
        <Route path="/aboutUs" component={Components.AboutUs} />
        <Route path="/news" component={Components.News} />
        <Components.Footer />
      </Router>

      
    </div>
  );
}

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);
