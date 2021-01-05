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

const store = configureStore();

ReactDOM.render(
  <AppContainer>
      <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,

  document.getElementById("root")
);
