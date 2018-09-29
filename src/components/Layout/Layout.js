import React, { Component } from "react";

import "./Layout.css";
import Header from "../Header";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />

        <main>
          <div className="container">
            <div className="row">
              <div className="col-12">{this.props.children}</div>
            </div>
          </div>
        </main>

        <footer />
      </div>
    );
  }
}
