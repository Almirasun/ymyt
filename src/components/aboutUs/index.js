import React from "react";
import * as Language from "../../strings/strings";
import "./index.css";

export const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div className="second-section__area">
        <p className="second-section__title">
          {Language.ru["who-we-are-title"]}
        </p>
        <p className="second-section__description">
          {Language.ru["who-we-are-info"]}
        </p>
      </div>
    </div>
  );
};
