import React from "react";
import * as ReactRedux from "react-redux";
import * as Components from "../../components";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./index.css";

export const Footer = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="footer">
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row text-left">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src={logo} width={120} alt="Logo" />
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0">{strings[lang]["footer-links"]}</h6>

              <ul className="list-unstyled">
                <li>
                  <Link to="/newsPage" className='text-dark'>
                    {strings[lang]["footer-news"]}
                  </Link>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-projects"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-about-us"]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h6 className="">{strings[lang]["footer-adress"]}</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-city"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-street"]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h6 className="mb-0">{strings[lang]["footer-contacts"]}</h6>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-phone"]}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-email"]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          <div className="d-flex justify-content-end">
            <div style={{ marginRight: 15, marginTop: 25, color: "grey" }}>
              {strings[lang]["cover-follow-us"]}
            </div>
            <div style={{ marginTop: 25 }}>
              <Components.SocialIconsFooter />
            </div>
          </div>
          <a className="text-dark" style={{ color: "grey" }} href="#">
            {" "}
            © 2021 Copyright: Umut bulagy
          </a>
          <a className="text-dark" style={{ color: "grey" }} href="https://fortylines.io/" target='_blank' rel='noreferrer'>
            {" "}
            | This web-site is made by Fortylines.io
          </a>
        </div>
      </footer>
    </div>
  );
};
