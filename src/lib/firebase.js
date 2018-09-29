import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBJx2_AG-ahIOlidEvaERs94DsF0d76fhQ",
  authDomain: "book-inventory-in-class.firebaseapp.com",
  databaseURL: "https://book-inventory-in-class.firebaseio.com",
  projectId: "book-inventory-in-class",
  storageBucket: "book-inventory-in-class.appspot.com",
  messagingSenderId: "421048009229"
};

firebase.initializeApp(config);

export default firebase;
