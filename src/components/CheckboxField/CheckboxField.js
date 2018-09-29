import React from "react";

export default function CheckboxField(props) {
  const { input, meta, id, label } = props;
  const isErrorDisplayed = meta.touched && meta.error;

  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className={`form-check-input ${isErrorDisplayed && "is-invalid"}`}
        {...input}
      />

      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>

      {isErrorDisplayed && <div className="invalid-feedback">{meta.error}</div>}
    </div>
  );
}
