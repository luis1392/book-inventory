import React, { Component } from "react";

import NewBookForm from "../../components/NewBookForm";

export default class NewBook extends Component {
  render() {
    return (
      <div>
        <h1>New Book</h1>
        <NewBookForm />
      </div>
    );
  }
}
