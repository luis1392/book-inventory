import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/books">Books</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/books/new">New Book</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
