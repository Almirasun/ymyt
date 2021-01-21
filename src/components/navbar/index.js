import React from "react";
import logo from "./logo.png";
import "./index.scss";
import * as Strings from "../../strings/strings";

export const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo} alt="logo" />
          </div>

          {/* <div className="navbar-burger" data-tartget="navMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div> */}
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="menu-item">{Strings.ru["navbar-lang-ru"]}</a>
          <a className="menu-item">{Strings.ru["navbar-lang-kg"]}</a>
          <a className="menu-item">{Strings.ru["navbar-lank-en"]}</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">TUT BUDET BURGER</a>
            <div className="navbar-dropdown is-boxed is-right">
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-main"]}
              </a>
              <hr className="nav-divider" />
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-about-us"]}
              </a>
              <hr className="nav-divider" />
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-projects"]}
              </a>
              <hr className="nav-divider" />
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-news"]}
              </a>
              <hr className="nav-divider" />
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-contacts"]}
              </a>
              <hr className="nav-divider" />
              <a href="#" className="navbar-item">
                {Strings.ru["navbar-link-donate"]}
              </a>
              <hr className="nav-divider" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
