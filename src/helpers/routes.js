import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          // agr normal render kr rhe hote to simply path spcify krte and agr redirect kr rhe hote then 'pathName' specify hota
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      //   go through the documentation and read more about location, basically what it does and where it can be used somthing like this or how location is benificial to use
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
