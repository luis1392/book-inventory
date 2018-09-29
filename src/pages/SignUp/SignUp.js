import React, { Component } from "react";

import SignUpForm from "../../components/SignUpForm";
import * as api from "../../lib/api";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    );
  }
}
