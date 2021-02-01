import * as Components from "../../components"

export const HomePage = () => {
    return (
      <div className="App">
        <Components.Navbar />
        <Components.Cover />
        <Components.WhoWeAre />
        <Components.WhatWeDo />
        <Components.News />
        <Components.Gallery />
        <Components.Donate />
        {/* <Components.Projects /> */}
        <Components.OperatingMode />
        <Components.Footer />
      </div>
    );
  };