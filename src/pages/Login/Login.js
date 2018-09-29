import React, { Component } from "react";

import LoginForm from "../../components/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log in</h1>
        <LoginForm />
      </div>
    );
  }
}
