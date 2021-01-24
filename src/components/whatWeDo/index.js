import React from "react";
import * as Language from "../../strings/strings";

import "./index.scss";

export const WhatWeDo = () => {
  return (
    <div id="WhatWeDo">
      <section className="third-section">
        <div className="third-section__text">
          <p className="third-section__title">{Language.ru["what-we-do-title"]}</p>
          <p className="third-section__description">
            {Language.ru["what-we-do-info"]}
          </p>
        </div>
        <div className="activities-area">
          <div className="item-1 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-education"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-education-info"]}</div>
          </div>
          <div className="item-2 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-health-care"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-health-care-info"]}</div>
          </div>
          <div className="item-3 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-culture"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-culture-info"]}</div>
          </div>
          <div className="item-4 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-eco"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-eco-info"]}</div>
          </div>
          <div className="item-5 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-science"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-science-info"]}</div>
          </div>
          <div className="item-6 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-economy"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-economy-info"]}</div>
          </div>
          <div className="item-7 activities">
            <div className="activities__icon"></div>
            <div className="activities__title">{Language.ru["what-we-do-rights"]}</div>
            <div className="activities__description">{Language.ru["what-we-do-rights-info"]}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
