import React, { Component } from "react";
import { connect } from "react-redux";

import * as api from "../../lib/api";
import * as currentUserActions from "../../redux/reducers/currentUser";

class LoginForm extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  state = {
    submitting: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitting: true,
      error: null
    });

    this.props
      .logIn(this.emailRef.current.value, this.passwordRef.current.value)
      .then(user => {
        this.setState({
          submitting: false
        });
      })
      .catch(error => {
        this.setState({
          submitting: false,
          error
        });
      });
  };

  render() {
    const { submitting, error } = this.state;

    return (
      <div className="row">
        <div className="col-12 col-lg-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="form-control"
                name="email"
                ref={this.emailRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                ref={this.passwordRef}
              />
            </div>

            <button className="btn btn-primary" disabled={submitting}>
              Log in
            </button>

            {error && <p className="text-danger">{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const selectState = undefined;

const actions = {
  logIn: currentUserActions.logIn
};

export default connect(
  selectState,
  actions
)(LoginForm);
