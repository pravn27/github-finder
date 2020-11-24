import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layouts/Header/Header";
import Home from "./layouts/Home/Home";
import UserDetails from "./components/Users/UserDetails";
import About from "./layouts/About/About";

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={UserDetails} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
