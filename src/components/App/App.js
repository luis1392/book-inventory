import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import LogOut from "../../pages/LogOut";
import Books from "../../pages/Books";
import NewBook from "../../pages/NewBook";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/new" component={NewBook} />
        </Switch>
      </Layout>
    );
  }
}
