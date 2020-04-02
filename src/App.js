import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Curriculum from "./Curriculum";
import Linkedin from "./Linkedin";
import Github from "./Github";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/Curriculum" component={Curriculum} />
          <Route path="/Linkedin" component={Linkedin} />
          <Route path="/Github" component={Github} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
