// Package import
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// File import
import { Home, Signup, Signin, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

// import { JumbotronContainer } from "./containers/jumbotron";
// import { FooterContainer } from "./containers/footer";
// import { FaqsContainer } from "./containers/faqs";

export default function App() {
  return (
    <Router>
      <Route exact path="/user">
        <p>Hello Im a User</p>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

{
  /* <>
      <JumbotronContainer />
      <FaqsContainer />

      <FooterContainer />
    </> */
}
