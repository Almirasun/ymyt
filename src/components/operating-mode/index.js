import React from "react";
import * as ReactRedux from "react-redux";
import { Link } from 'react-router-dom'

import "./index.css";

export const OperatingMode = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="operating-mode" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 container">
            <div className="visit-title">{strings[lang]["visit-title"]}</div>
            {/* <div className="visit-info">{strings[lang]["visit-info"]}</div> */}
            <Link to="/visitForm"><button className="btn btn-success mt-4 mb-4">{strings[lang]["visit-button"]}</button></Link>
          </div>
          <div className="col-lg-6 flex-column justify-content-center">
            <div className="row">
              <div className="container">
                <h3 className="text-center">{strings[lang]["work"]}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col container days">
                <p className="text-center top">{strings[lang]["work-days"]}</p>
                <p className="text-center bottom">{strings[lang]["work-day-off"]}</p>
              </div>
              <div className="col container time">
                <p className="text-center top">{strings[lang]["work-time"]}</p>
                <p className="text-center bottom">{strings[lang]["work-sunday-time"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
