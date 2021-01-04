import { hot } from "react-hot-loader/root";
import React from "react";
import "./scss/index.scss";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation from "./components/Navbar.jsx";
import Map from "./components/Map.jsx";
import Home from "./components/Home.jsx";
import Infobox from "./components/Infobox.jsx";
import Footer from "./components/Footer.jsx";
import { useSelector } from "react-redux";
const App = () => {

  return (
    <>

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
            <Infobox />
            <Infobox />
          </Route>
          <Route exact path="/map" component={Map} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
};

export default hot(App);
