import React from "react";

export default function SelectField(props) {
  const { input, meta, id, children } = props;
  const isErrorDisplayed = meta.touched && meta.error;

  return (
    <React.Fragment>
      <select
        id={id}
        className={`form-control custom-select ${isErrorDisplayed &&
          "is-invalid"}`}
        {...input}
      >
        {children}
      </select>

      {isErrorDisplayed && <div className="invalid-feedback">{meta.error}</div>}
    </React.Fragment>
  );
}
