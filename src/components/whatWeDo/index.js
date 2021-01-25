import React from "react";
import * as ReactRedux from "react-redux";

import "./index.css";

export const WhatWeDo = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="whatWeDo" className="container" style={{ marginTop: 50 }}>
      <div className="infos">
        <h3 className="info-1 text-center">
          {strings[lang]["what-we-do-title"]}
        </h3>
        <p className="info-2 text-center">{strings[lang]["what-we-do-info"]}</p>
      </div>
      <div className="activities ">
        <div className="row" style={{ marginTop: 50 }}>
          <div className="col ">
            <div className="container item-1 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center">{strings[lang]["what-we-do-education"]}</p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-education-info"]}</p>
            </div>
          </div>
          <div className="col ">
            <div className="container item-2 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center">{strings[lang]["what-we-do-health-care"]}</p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-health-care-info"]}</p>
            </div>
          </div>
          <div className="col ">
            <div className="container item-3 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center"> {strings[lang]["what-we-do-culture"]} </p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-culture-info"]}</p>
            </div>
          </div>
          <div className="col ">
            <div className="container item-4 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center">{strings[lang]["what-we-do-eco"]} </p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-eco-info"]}</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 50 }}>
          <div className="col ">
            <div className="container item-5 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center">{strings[lang]["what-we-do-science"]} </p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-science-info"]}</p>
            </div>
          </div>
          <div className="col ">
            <div className="container item-6 activities__icon"> </div>
            <div className="activities__title">
              <p class="text-center">{strings[lang]["what-we-do-economy"]}</p>
            </div>
            <div className="activities__description">
              <p class="text-center">{strings[lang]["what-we-do-economy-info"]}</p>
            </div>
          </div>
          <div className="col ">
            <div className="container item-7 activities__icon"> </div>
            <div className="activities__title">
              <p className="text-center">{strings[lang]["what-we-do-rights"]}</p>
            </div>
            <div className="activities__description">
              <p className="text-center">{strings[lang]["what-we-do-rights-info"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
