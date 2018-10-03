import React, { Component } from "react";
import { connect } from "react-redux";

import * as booksActions from "../../redux/reducers/books";

class Books extends Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    this.setState({
      loading: true,
      error: null
    });

    this.props
      .loadBooks()
      .then(() => {
        this.setState({
          loading: false
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
    const { loading, error } = this.state;
    const { books } = this.props;

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

const selectState = state => {
  return {
    books: state.books
  };
};

const actions = {
  loadBooks: booksActions.loadBooks
};

export default connect(
  selectState,
  actions
)(Books);
