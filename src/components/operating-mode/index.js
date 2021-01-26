import React from "react";
import * as ReactRedux from "react-redux";
import "./index.css";

export const OperatingMode = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="operating-mode" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center align-items-start">
            <div className="container">
              <h3 className="text-center">{strings[lang]["work"]}</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="container days">
              <p className="text-center top">{strings[lang]["work-days"]}</p>
              <p className="text-center bottom">{strings[lang]["work-day-off"]}</p>
            </div>
          </div>
          <div className="col-3">
            <div className="container time">
              <p className="text-center top">{strings[lang]["work-time"]}</p>
              <p className="text-center bottom">{strings[lang]["work-sunday-time"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
