// Package import
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// File import
import { Home, Signup, Signin, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/use-auth-listener";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Route exact path="/user">
        <p>Hello Im a User</p>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
    </Router>
  );
}
