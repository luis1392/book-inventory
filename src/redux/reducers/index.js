import { combineReducers } from "redux";

import books from "./books";
import currentUser from "./currentUser";

export default combineReducers({
  books,
  currentUser
});
