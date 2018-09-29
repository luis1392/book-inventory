function isEmpty(value) {
  if (value === "" || value === undefined || value === null) {
    return true;
  }

  return false;
}

export function isRequired(value /*, allValues*/) {
  if (isEmpty(value)) {
    return "Required";
  }
}

export function isExactValue(expectedValue, errorMessage) {
  return value => {
    if (value !== expectedValue) {
      return errorMessage;
    }
  };
}

// export function mustBeTrue(value) {
//   if (value !== true) {
//     return "Must be true";
//   }
// }
