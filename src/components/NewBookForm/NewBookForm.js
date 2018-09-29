import React, { Component } from "react";
import { Form, Field } from "react-final-form";

export default class NewBookForm extends Component {
  handleSubmit = formData => {
    console.log({ formData });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* {(props) => {
          const { handleSubmit, submitting } = props; */}
        {({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field
                  id="title"
                  className="form-control"
                  name="title"
                  component="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="publicationDate">Publication Date</label>
                <Field
                  id="publicationDate"
                  className="form-control"
                  name="publicationDate"
                  component="input"
                  type="date"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pageCount">Page Count</label>
                <Field
                  id="pageCount"
                  className="form-control"
                  name="pageCount"
                  component="input"
                  type="number"
                />
              </div>

              <div className="form-check">
                <Field
                  id="isFiction"
                  className="form-check-input"
                  name="isFiction"
                  component="input"
                  type="checkbox"
                />

                <label className="form-check-label" htmlFor="isFiction">
                  Fiction?
                </label>
              </div>

              <button className="btn btn-primary">Save</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
