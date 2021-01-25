import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";

import CausePage from "views/LandingPage/CausePage";
import AboutPage from "views/LandingPage/AboutPage";
import GovernacePage from "views/LandingPage/GovernancePage";
import ContactPage from "views/LandingPage/ContactPage";
import AccountPage from "views/LandingPage/AccountPage";
//cause page

import HealthPage from "views/LandingPage/HealthPage";
import Jobs from "views/LandingPage/Jobs";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Components} />
        <Route path="/health-page" exact component={HealthPage} />
        <Route path="/about-page" exact component={AboutPage} />
        <Route path="/account" exact component={AccountPage} />
        <Route path="/governance-page" exact component={GovernacePage} />
        <Route path="/contact-us-page" exact component={ContactPage} />
        <Route path="/cause-page" exact component={CausePage} />
        <Route path="/jobs" exact component={Jobs} />
      </Switch>
    </Router>
  );
}

export default App;
