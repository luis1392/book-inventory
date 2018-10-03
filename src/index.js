import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import pick from "lodash/pick";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import firebase from "./lib/firebase";
import App from "./components/App";
import makeStore from "./redux/makeStore";

function renderApp(initialState) {
  const store = makeStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}

firebase.auth().onAuthStateChanged(currentUser => {
  const initialState = {
    currentUser: pick(currentUser, ["email", "uid"])
  };

  renderApp(initialState);
});
