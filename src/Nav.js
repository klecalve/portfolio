import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h3>LOGO</h3>
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
