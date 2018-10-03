import * as api from "../../lib/api";

// Action types
const CREATE_BOOK = "bookInventory/books/CREATE_BOOK";
const LOAD_BOOKS = "bookInventory/books/LOAD_BOOKS";

// Action creators
export function createBook(book) {
  return dispatch => {
    return api.createBook(book).then(newBookRef => {
      newBookRef.once("value", snapshot => {
        dispatch({
          type: CREATE_BOOK,
          payload: {
            id: snapshot.key,
            ...snapshot.toJSON()
          }
        });
      });
    });
  };
}

export function loadBooks() {
  return dispatch => {
    return api.getBooks().then(books => {
      dispatch({
        type: LOAD_BOOKS,
        payload: books
      });
    });
  };
}

const initialState = [];
// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case LOAD_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
