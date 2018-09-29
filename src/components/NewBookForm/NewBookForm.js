import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import InputField from "../InputField";
import CheckboxField from "../CheckboxField";
import SelectField from "../SelectField";
import { isRequired, isExactValue } from "../../utils/validations";

export default class NewBookForm extends Component {
  handleSubmit = formData => {
    console.log({ formData });
  };

  render() {
    const initialValues = {
      publicationDate: "2018-09-29",
      isFiction: true
    };

    return (
      <Form
        onSubmit={this.handleSubmit}
        initialValues={initialValues}
        mutators={{
          ...arrayMutators
        }}
      >
        {/* {(props) => {
          const { handleSubmit, submitting, values } = props; */}
        {({ handleSubmit, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field
                  id="title"
                  name="title"
                  component={InputField}
                  validate={isRequired}
                />
              </div>

              <FieldArray name="authors">
                {({ fields }) => {
                  return (
                    <React.Fragment>
                      <h3>
                        <span className="mr-2">Authors</span>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => fields.push("")}
                        >
                          Add
                        </button>
                      </h3>
                      {fields.map((name, index) => (
                        <div key={name} className="form-group row">
                          <div className="col-2">
                            <label htmlFor={name}>Name</label>
                          </div>

                          <div className="col-8">
                            <Field
                              id={name}
                              name={name}
                              component={InputField}
                              validate={isRequired}
                            />
                          </div>
                          <div className="col-2">
                            <button
                              className="btn btn-danger"
                              onClick={() => fields.remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  );
                }}
              </FieldArray>

              <div className="form-group">
                <label htmlFor="publicationDate">Publication Date</label>
                <Field
                  id="publicationDate"
                  name="publicationDate"
                  type="date"
                  component={InputField}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pageCount">Page Count</label>
                <Field
                  id="pageCount"
                  name="pageCount"
                  type="number"
                  validate={isRequired}
                  component={InputField}
                />
              </div>

              <div className="form-group">
                <Field
                  id="isFiction"
                  name="isFiction"
                  component={CheckboxField}
                  label="Fiction?"
                  type="checkbox"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <Field
                  id="category"
                  name="category"
                  component={SelectField}
                  validate={isRequired}
                >
                  <option />

                  {values.isFiction ? (
                    <React.Fragment>
                      <option value="sciFi">Sci-Fi</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="graphicNovel">Graphic Novel</option>
                      <option value="comic">Comic</option>
                      <option value="romance">Romance</option>
                      <option value="thriller">Thriller</option>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <option value="journalism">Journalism</option>
                      <option value="essay">Essay</option>
                      <option value="history">History</option>
                      <option value="politics">Politics</option>
                      <option value="philosophy">Philosophy</option>
                      <option value="science">Science</option>
                    </React.Fragment>
                  )}
                </Field>
              </div>

              <div className="form-group">
                <Field
                  id="hasAcceptedToS"
                  name="hasAcceptedToS"
                  component={CheckboxField}
                  label="I accept terms of service"
                  type="checkbox"
                  validate={isExactValue(true, "You must accept")}
                />
              </div>

              <button className="btn btn-primary">Save</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
