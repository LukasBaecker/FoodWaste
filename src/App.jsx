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
//import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { useSelector } from "react-redux";
const App = () => {
  //const authorized = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <>
    <Navigation />
    <Map/>
    <Footer />
    </>
  )
  /**
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            {authorized ? <Home /> : <Redirect to="/start" />}
          </Route>
          <Route exact path="/signin">
            {authorized ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route exact path="/signup">
            {authorized ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route exact path="/user/:userId" component={User} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/autherror" component={Autherror} />
          <Route exact path="/success/:message" component={Success} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
   */
};

export default hot(App);
