import React from "react";

export default function InputField(props) {
  const { input, meta, id, type } = props;

  const error = meta.error || meta.submitError;
  const isErrorDisplayed = meta.touched && error;

  return (
    <React.Fragment>
      <input
        id={id}
        type={type}
        className={`form-control ${isErrorDisplayed && "is-invalid"}`}
        {...input}
      />

      {isErrorDisplayed && <div className="invalid-feedback">{error}</div>}
    </React.Fragment>
  );
}
