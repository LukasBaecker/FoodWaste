import { hot } from "react-hot-loader/root";
import React from "react";
import "./scss/index.scss";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from "./components/Navbar.jsx";
import MapPage from "./components/MapPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Plots from "./components/Plots.jsx"; // for working on plots
import ScrollamaEx from "./components/ScrollamaEx.jsx"
const App = () => {
  return (
    <>
      <Router basename={"FoodWaste"}>
        <Navigation />
        <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/map">
            <MapPage />
          </Route>
          <Route exact path="/plots">
            <Plots />
          </Route>
          <Route exact path="/scrollama">
            <ScrollamaEx/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default hot(App);
