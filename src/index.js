import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import firebase from "./lib/firebase";
import App from "./components/App";

function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

firebase.auth().onAuthStateChanged(user => {
  renderApp();
});
