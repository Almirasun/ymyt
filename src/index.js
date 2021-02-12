import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.scss";

function App({ history }) {
  React.useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [])

  return (
    <>
    <Route exact path="/" component={Components.HomePage} />
    <Route path="/about-us" component={Components.AboutUsPage} />
    <Route path="/donateForm" component={Components.DonateGoogleForm} />
    <Route path="/requestForm" component={Components.RequestGoogleForm} />
    <Route path="/joinForm" component={Components.JoinGoogleForm} />
    <Route path="/visitForm" component={Components.VisitGoogleForm} />
    <Route path="/newsPage" component={Components.NewsPage} />
  </>
  );
}

const AppRouter = withRouter(App);

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ReactRedux.Provider>,
  document.getElementById("root")
);