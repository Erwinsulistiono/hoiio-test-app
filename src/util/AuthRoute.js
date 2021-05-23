import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

export function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export function LandingRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user === null && props.location.pathname === "/" ? (
          <Redirect to="/register" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
