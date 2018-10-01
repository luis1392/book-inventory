import React, { Component } from "react";

import * as api from "../../lib/api";

export default class Books extends Component {
  state = {
    loading: true,
    error: null,
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    this.setState({
      loading: true,
      error: null
    });

    api
      .getBooks()
      .then(books => {
        this.setState({
          loading: false,
          books
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  render() {
    const { loading, error, books } = this.state;

    return (
      <div>
        <h1>My Books</h1>
        <ul>
          {books.map(book => (
            <li key={book.id}>{JSON.stringify(book, null, 4)}</li>
          ))}
        </ul>
      </div>
    );
  }
}
