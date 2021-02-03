import React from "react";
import * as ReactRedux from "react-redux";
import * as Components from "../../components";
import "./index.css";

export const AboutUs = () => {
  const strings = ReactRedux.useSelector((state) => state.strings);
  const lang = ReactRedux.useSelector((state) => state.lang);

  return (
    <div id="aboutUs" className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-start bg-title">
            <div className="container">
              <div className="h1">{strings[lang]["about-us-title"]}</div>
            </div>
            <div className="d-flex align-items-center">
              <div style={{marginRight: 15, marginTop: 25}}>{strings[lang]["cover-follow-us"]}</div>
              <div style={{marginTop: 25}}>
                <Components.SocialIcons />
              </div>
            </div>
          </div>
          <div className="col-lg-7 bg-image">
            <div className="arrow" />
          </div>
        </div>
      </div>

      <div id="mission" className="container">
        <div className="row">
          <h3 className="col-lg-3">{strings[lang]["mission-title"]}</h3>
          <div className="col-lg-9 infos">
            <p className="info-2">{strings[lang]["mission-info"]}</p>
          </div>
        </div>
      </div>

      {/* <div id="ourTeam" className="container">
        <div className="infos">
          <h3 className="info-1 text-center">{strings[lang]["our-team"]}</h3>
        </div>
        <div className="activities">
          <div className="row">
            <div className="col-lg-4">
              <div className="container item-8 activities__icon"> </div>
              <div className="activities__title">
                <p class="text-center">{strings[lang]["our-team-management"]}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container item-9 activities__icon"> </div>
              <div className="activities__title">
                <p class="text-center">{strings[lang]["our-team-project"]}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container item-10 activities__icon"> </div>
              <div className="activities__title">
                <p class="text-center"> {strings[lang]["our-team-accounting"]} </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container item-11 activities__icon"> </div>
              <div className="activities__title">
                <p class="text-center">{strings[lang]["our-team-lawyer"]} </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container item-12 activities__icon"> </div>
              <div className="activities__title">
                <p class="text-center">{strings[lang]["our-team-smm"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
