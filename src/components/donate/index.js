import React from "react";
import * as ReactRedux from "react-redux";

import "./index.css";

export const Donate = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="donate" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col container-fluid">
            <div className="row" style={{height: 300}}>
              <div className="col d-flex flex-column justify-content-center align-items-start">
                <div className="container">
                  <h3 className="text-left donate-title">{strings[lang]["donate-now"]}</h3>
                  <p className="text-left donate-info">{strings[lang]["donate-now-info"]}</p>
                  <button className="btn btn-success">{strings[lang]["donate-button"]}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 bg-image">
            <div className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
