import React from "react";
import * as ReactRedux from "react-redux";

import "./index.css";

export const Request = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="request" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 bg-image">
            {/* <div className="arrow" /> */}
          </div>
          <div className="col container-fluid">
            <div className="row" style={{height: 300}}>
              <div className="col d-flex flex-column justify-content-center align-items-start">
                <div className="container">
                  <h3 className="text-left donate-title">{strings[lang]["send-request"]}</h3>
                  <p className="text-left donate-info">{strings[lang]["send-request-info"]}</p>
                  <button className="btn btn-success">
                    {strings[lang]["send-request-button"]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
