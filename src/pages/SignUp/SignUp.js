import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm";
import isLoggedIn from "../../utils/isLoggedIn";

export default class SignUp extends Component {
  render() {
    if (isLoggedIn()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    );
  }
}
