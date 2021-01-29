import React from "react";
import * as ReactRedux from "react-redux";
import logo from "./logo.png";
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
                  <a href="#!" className="text-dark">
                    {strings[lang]["footer-news"]}
                  </a>
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
          <a className="text-dark" href="#">
            {" "}
            © 2020 Copyright: Umut bulagy
          </a>
        </div>
      </footer>
    </div>
  );
};
