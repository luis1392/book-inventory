import firebase from "../lib/firebase";

export default function isLoggedIn() {
  // if (firebase.auth().currentUser) {
  //   return true;
  // }
  // return false;
  // console.log(firebase.auth().currentUser);

  return firebase.auth().currentUser;
}
