import React, { Component } from "react";
import logo from "./logo.png";
import "./navbar.css";
import * as Strings from "../../strings/strings";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              {" "}
            </a>
            <span className="navbar-burger" data-tartget="navMenu">
              <span></span>
              <span></span>
              <span> </span>
            </span>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div class="navbar-end">
              <a href="#" class="navbar-item is-active">{Strings.ru["navbar-link-main"]}</a>
              <a href="#" class="navbar-item">{Strings.ru["navbar-link-about-us"]}</a>
              <a href="#" class="navbar-item">{Strings.ru["navbar-link-projects"]}</a>
              <a href="#" class="navbar-item">{Strings.ru["navbar-link-news"]}</a>
              <a href="#" class="navbar-item">{Strings.ru["navbar-link-contacts"]}</a>
              <a href="#" class="navbar-item">{Strings.ru["navbar-link-donate"]}</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
