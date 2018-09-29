import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import firebase from "../../lib/firebase";
import isLoggedIn from "../../utils/isLoggedIn";

export default class LogOut extends Component {
  componentDidMount() {
    this.logOut();
  }

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (isLoggedIn()) {
      return null;
    } else {
      return <Redirect to="/" />;
    }
  }
}
