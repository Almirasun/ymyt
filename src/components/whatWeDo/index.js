import React from "react";
import * as Language from "../../strings/strings";

import "./index.css";

export const WhatWeDo = () => {
  return (
    <div id="WhatWeDo">
      <section className="third-section">
        <div className="third-section__area">
          <p className="third-section__title">{Language.ru["what-we-do-title"]}</p>
          <p className="third-section__description">
            {Language.ru["what-we-do-info"]}
          </p>
        </div>
        <div className="activities"></div>
      </section>
    </div>
  );
};
