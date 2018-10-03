import pick from "lodash/pick";

import firebase from "../../lib/firebase";
import * as api from "../../lib/api";

// Action Types
const LOG_IN = "bookInventory/currentUser/LOG_IN";
const SIGN_UP = "bookInventory/currentUser/SIGN_UP";
const LOG_OUT = "bookInventory/currentUser/LOG_OUT";

// Action creators
export function logIn(email, password) {
  return dispatch => {
    return api.login(email, password).then(user => {
      dispatch({
        type: LOG_IN,
        payload: pick(user.user, ["email", "uid"])
      });
    });
  };
}

export function logOut() {
  return dispatch => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: LOG_OUT
        });
      });
  };
}

const initialState = null;

// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
