import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Exemples from "./Exemples";
import Contact from "./Contact";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/exemples" component={Exemples} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
