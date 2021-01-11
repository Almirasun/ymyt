import React, { Component } from "react";
import logo from "./logo.png";
import { MenuItems } from "./MenuItems";
import { langItems } from "./langItems";
import "./navbar.css";

class Navbar extends Component {


  render() {
    return (
      <nav className="NavbarItems">
        <img src={logo} alt="Logo" />

        <ul className="lang-list">
          {langItems.map((item, index) => {
            return (
              <li>
                <a className={item.className}> {item.lang}</a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
