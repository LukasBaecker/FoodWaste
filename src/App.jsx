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
import MapPage from "./components/MapPage.jsx";
import Selection from "./components/Selection.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Plots from "./components/Plots.jsx"; // for working on plots
import { useDispatch} from "react-redux";
import { setScrollTop} from "./actions";
import RSC from "react-scrollbars-custom";
import ScrollamaEx from "./components/ScrollamaEx.jsx"
const App = () => {

  const dispatch = useDispatch();

  return (
    <>

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
              <HomePage/>
          </Route>
          <Route exact path="/map">
            <Sidebar />
            <MapPage />
            <Selection />
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
