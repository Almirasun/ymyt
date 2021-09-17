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
          <div className="col d-flex flex-column justify-content-center bg-title">
            <div className="container">
              <div className="h1">{strings[lang]["cover-title"]}</div>
              <div className="moto">{strings[lang]["cover-moto"]}</div>
              <a href="#footer">
                <button className="btn btn-success mt-4 mb-4 contact-button">
                  {strings[lang]["cover-contact-us-button"]}
                </button>
              </a>
              <div className="d-flex align-items-center social-icons__main">
                <div style={{marginRight: 15, paddingTop: 5}}>
                  {strings[lang]["cover-follow-us"]}
                </div>
                <div style={{marginTop: 25}}>
                  <Components.SocialIcons />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 bg-image" >
            <p>{strings[lang]["watermark"]}</p>
          </div>            
        </div>
      </div>
    </div>
  );
};
