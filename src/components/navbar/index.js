import React from "react";
import logo from "./logo.png";
import * as ReactRedux from "react-redux";
import * as AppRedux from "../../redux";
import {Link} from "react-router-dom";

import "./index.css";

export const Navbar = () => {
  const dispatch = ReactRedux.useDispatch();

  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  const handleLangClick = (lang) => (e) => {
    e.preventDefault();

    dispatch(AppRedux.SetLanguageAction(lang));
  };

  return (
    <div>
      <div id="navbar" className="container-fluid navbar navbar-expand-xl navbar-light">
        <a className="navbar-brand">
          <img src={logo} width={120} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#burger"
          aria-controls="burger"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="burger" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link nav-menu" href="/">
                  {strings[lang]["navbar-link-main"]}
                </a>
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#projects">
                {strings[lang]["navbar-link-projects"]}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about-us">
                <a className="nav-link nav-menu" href="/">
                  {strings[lang]["navbar-link-about-us"]}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                {strings[lang]["navbar-link-contacts"]}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto second-ul">
            <li className="nav-item">
              <Link to="/donateForm">
                <button id="donate-btn" className="btn btn-success">
                  {strings[lang]["navbar-link-donate"]}
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link lang-link" href="/" onClick={handleLangClick("ru")}>
                {strings[lang]["navbar-lang-ru"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lang-link" href="/" onClick={handleLangClick("kg")}>
                {strings[lang]["navbar-lang-kg"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lang-link" href="/" onClick={handleLangClick("en")}>
                {strings[lang]["navbar-lang-en"]}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
