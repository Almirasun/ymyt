import React, { Component } from "react";
import * as Language from "../../strings/strings";
import "./cover.css";

class Cover extends Component {
  render() {
    return (
      <div id="Cover" className="bg-cover">
          <h1>{Language.ru["cover-title"]}</h1>
          <button>{Language.ru["cover-contact-us-button"]}</button>
      </div>
    );
  }
}

export default Cover;
