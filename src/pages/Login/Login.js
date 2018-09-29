import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import LoginForm from "../../components/LoginForm";
import isLoggedIn from "../../utils/isLoggedIn";

export default class Login extends Component {
  render() {
    if (isLoggedIn()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Log in</h1>
        <LoginForm />
      </div>
    );
  }
}
