import React from "react";
import logo from "./logo.png";
import "./index.scss";
import * as Strings from "../../strings/strings";

export const Navbar = () => {

  const [isActive, setActive] = React.useState(false);

  const handleBurgerClick = () => {
    setActive(!isActive)
  }

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src={logo} alt="logo" />
        </div>

        <a
          role="button"
          className={"navbar-burger" + (isActive ? ' is-active' : '')} onClick={handleBurgerClick}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className={"navbar-menu" + (isActive ? ' is-active' : '')} onClick={handleBurgerClick}>
        <div className="navbar-end">
          <a className="navbar-item">{Strings.ru["navbar-link-main"]}</a>
          <a className="navbar-item">{Strings.ru["navbar-link-about-us"]}</a>
          <a className="navbar-item">{Strings.ru["navbar-link-projects"]}</a>
          <a className="navbar-item">{Strings.ru["navbar-link-contacts"]}</a>
          <a className="navbar-item">{Strings.ru["navbar-link-donate"]}</a>
          <a className="navbar-item lang-list">{Strings.ru["navbar-lang-ru"]}</a>
          <a className="navbar-item lang-list">{Strings.ru["navbar-lang-kg"]}</a>
          <a className="navbar-item lang-list">{Strings.ru["navbar-lang-en"]}</a>
        </div>
      </div>
    </nav>
  );
};

