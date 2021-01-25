import React from "react";
import * as ReactRedux from "react-redux";
import * as Components from "../../components";
import "./index.css";

export const Cover = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="app-cover">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-start bg-title">
            <div className="h1">{strings[lang]["cover-title"]}</div>
            <div className="moto">{strings[lang]["cover-moto"]}</div>
            <button className="btn btn-success mt-4 mb-4 contact-button">
              {strings[lang]["cover-contact-us-button"]}
            </button>
            <div>{strings[lang]["cover-follow-us"]}</div>
          </div>
          <div className="col-7 bg-image">
            <div className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
