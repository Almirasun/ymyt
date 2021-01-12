import React, { Component } from "react";
import logo from "./logo.png";
import "./navbar.css";

class Navbar extends Component {

  state = {
  }

  render() {
    return (
      <nav className="">
        <img src={logo} alt="Logo" />

        <div>
          <ul className="lang-list">
            <li>
              <a>RU</a>
            </li>
            <li>
              <a>KG</a>
            </li>
            <li>
              <a>EN</a>
            </li>
          </ul>
        </div>

        <ul className="nav-menu">
          <li>
            <a></a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
