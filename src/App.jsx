import { hot } from "react-hot-loader/root";
import React from "react";
import "./scss/index.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MapPage from "./components/MapPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Router basename={"FoodWaste"}>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/map'>
            <MapPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default hot(App);
