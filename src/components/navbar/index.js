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
              <Link to="/Ymyt">
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
              <Link to="/Ymyt/about-us">
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
              <Link to="/Ymyt/donateForm">
                <button
                  id="donate-btn"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
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

      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {strings[lang]["modal-title"]}
              </h5>
            </div>
            <div class="modal-body">{strings[lang]["modal-info"]}</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                {strings[lang]["modal-close-btn"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
