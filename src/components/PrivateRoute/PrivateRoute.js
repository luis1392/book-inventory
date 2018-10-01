import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import isLoggedIn from "../../utils/isLoggedIn";

export default class PrivateRoute extends Component {
  render() {
    const { exact, path, component } = this.props;

    const PrivateComponent = component;

    return (
      <Route
        exact={exact}
        path={path}
        component={routeProps => {
          if (isLoggedIn()) {
            return <PrivateComponent {...routeProps} />;
          }

          const redirectTo = window.encodeURIComponent(
            routeProps.location.pathname + routeProps.location.search
          );
          return <Redirect to={`/login?redirectTo=${redirectTo}`} />;
        }}
      />
    );
  }
}
