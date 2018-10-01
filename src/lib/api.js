import firebase from "./firebase";
import snapshotToArray from "../utils/snapshotToArray";

export function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function createBook(book) {
  const user = firebase.auth().currentUser;

  return firebase
    .database()
    .ref(`user-books/${user.uid}`)
    .push(book);
}

export function getBooks() {
  const user = firebase.auth().currentUser;

  return firebase
    .database()
    .ref(`user-books/${user.uid}`)
    .once("value")
    .then(snapshot => {
      return snapshotToArray(snapshot);
    });
}
