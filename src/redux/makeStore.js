import { createStore } from "redux";

import reducer from "./reducers";

export default function makeStore(initialState = {}) {
  return createStore(reducer, initialState);
}
