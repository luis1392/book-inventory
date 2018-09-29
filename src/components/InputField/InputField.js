import React from "react";

export default function InputField(props) {
  const { input, meta, id, type } = props;
  const isErrorDisplayed = meta.touched && meta.error;

  return (
    <React.Fragment>
      <input
        id={id}
        type={type}
        className={`form-control ${isErrorDisplayed && "is-invalid"}`}
        {...input}
      />

      {isErrorDisplayed && <div className="invalid-feedback">{meta.error}</div>}
    </React.Fragment>
  );
}
