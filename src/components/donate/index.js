import React from "react";
import * as ReactRedux from "react-redux";

import "./index.css";

export const Donate = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="donate" className="">
      
      <div className="new-first new-elements">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 bg-title">
              <div className="donate-title">{strings[lang]["donate-now"]}</div>
              <div className="donate-info">{strings[lang]["donate-now-info"]}</div>
              <button className="btn btn-success mt-4 mb-4">
                {strings[lang]["donate-button"]}
              </button>
            </div>
            <div className="col-lg-6 img-area bg-image" />
          </div>
        </div>
      </div>

      <div className="new-second new-elements">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 img-area bg-image-2" />
            <div className="col-lg-6  bg-title">
              <div className="donate-title">{strings[lang]["send-request"]}</div>
              <div className="donate-info">{strings[lang]["send-request-info"]}</div>
              <button className="btn btn-success mt-4 mb-4">
                {strings[lang]["send-request-button"]}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="new-third new-elements">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 bg-title">
              <div className="donate-title">{strings[lang]["join"]}</div>
              <div className="donate-info">{strings[lang]["join-info"]}</div>
              <button className="btn btn-success mt-4 mb-4">{strings[lang]["join-button"]}</button>
            </div>
            <div className="col-lg-6 img-area bg-image-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
