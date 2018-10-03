import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import firebase from "../../lib/firebase";
import isLoggedIn from "../../utils/isLoggedIn";
import * as currentUserActions from "../../redux/reducers/currentUser";

class LogOut extends Component {
  componentDidMount() {
    this.logOut();
  }

  logOut = () => {
    this.props.logOut().catch(error => {
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

const selectState = undefined;
const actions = {
  logOut: currentUserActions.logOut
};

export default connect(
  selectState,
  actions
)(LogOut);
