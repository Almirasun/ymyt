import React from "react";
import * as ReactRedux from "react-redux";
import {Link} from "react-router-dom";

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
              <Link to="/donateForm">
                <div style={{marginBottom: "-80px"}}>
                  <button className="btn btn-success mt-4 mb-4">
                    {strings[lang]["donate-button"]}
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 img-area bg-image" title="Photo by Vlad Ushakov">
              <p>{strings[lang]["watermark"]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="new-second new-elements">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 img-area bg-image-2 img-donate__second" title="Photo by Vlad Ushakov">
              <p>{strings[lang]["watermark"]}</p>
            </div>
            <div className="col-lg-6  bg-title text-donate__second">
              <div className="donate-title">{strings[lang]["send-request"]}</div>
              <div className="donate-info">{strings[lang]["send-request-info"]}</div>
              <Link to="/requestForm">
                <div style={{marginBottom: "-80px"}}>
                  <button className="btn btn-success mt-4 mb-4">
                    {strings[lang]["send-request-button"]}
                  </button>
                </div>
              </Link>
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
              <Link to="/joinForm">
                <div style={{marginBottom: "-80px"}}>
                  <button className="btn btn-success mt-4 mb-4">
                    {strings[lang]["join-button"]}
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 img-area bg-image-3" title="Photo by Vlad Ushakov">
              <p>{strings[lang]["watermark"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
