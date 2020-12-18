import "./scss/index.scss";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import configureStore from "./configurateStore.js";
import { AppContainer } from "react-hot-loader";

//const store = configureStore();

/*
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}
*/
ReactDOM.render(
  <AppContainer>
      <App />
  </AppContainer>,
/*
ReactDOM.render(
  <AppContainer>
      <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  */
  document.getElementById("root")
);
