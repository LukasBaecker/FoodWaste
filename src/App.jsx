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
import Selection from "./components/Selection.jsx";
import Home from "./components/Home.jsx";
import Infobox from "./components/Infobox.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Plots from "./components/Plots.jsx";
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
          <Route exact path="/map">
            <Sidebar />
            <Map />
            <Selection />
          </Route>
          <Route exact path="/plots">
            <Plots />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
};

export default hot(App);
