import React from "react";
import * as ReactRedux from "react-redux";
import "./index.css";

export const Donate = () => {
    
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div className="donate-area">
      <div className="frame-first">
        <div className="donate-image donate-image-652">
          <div className="external-arrow" />
        </div>
      </div>
      <div className="frame-second">
        <div className="donate-image donate-image-652">
          <div className="external-arrow" />
        </div>
      </div>
      <div className="frame-third">
        <div className="donate-image donate-image-652">
          <div className="external-arrow" />
        </div>
      </div>
    </div>
  );
};
