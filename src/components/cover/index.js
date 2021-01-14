import React from "react";
import * as Language from "../../strings/strings";
import * as Components from "../../components"
import "./index.css";

export const Cover = () => {
  return (
    <div id="Cover" className="bg-cover">
      <section className="first-section">
        <header className="header">
          <div className="logo">
            Логотип
            {/* <img src="logo.svg"></img> */}
          </div>
          <div>
            <nav>
              <ul className="menu">
                <li className="menu-item">RU</li>
                <li className="menu-item">KG</li>
                <li className="menu-item">EN</li>
              </ul>
            </nav>
            <menu>Меню</menu>
          </div>
        </header>
        <div className="main-text">
          <p className="main-text__headline">{Language.ru["cover-title"]}</p>
          <p className="main-text__caption">{Language.ru["cover-moto"]}</p>
        </div>
        <button className="contact-us">{Language.ru["cover-contact-us-button"]}</button>
        <div className="social-icons__area">
          <p>{Language.ru["cover-follow-us"]}</p>
          <Components.SocialIcons />
        </div>
      </section>
    </div>
  );
};
