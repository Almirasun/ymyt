import React from "react";
import * as ReactRedux from "react-redux";
import "./index.css";

export const Projects = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="projects">
      <div className="container">
        <h3 className="text-center projects-title">{strings[lang]["projects"]}</h3>
        <div className="row">
          <div className="col-6">
            <div className="container project-img"></div>
          </div>
          <div className="col-6 project-info">
            <div className="container">
              <h6 className="text-left">{strings[lang]["project-1"]}</h6>
              <p className="text-left project-description">{strings[lang]["project-1-info"]}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 project-info">
            <div className="container">
              <h6 className="text-left">{strings[lang]["project-2"]}</h6>
              <p className="text-left project-description">{strings[lang]["project-2-info"]}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="container project-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
