import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  state = {
    visible: false
  };
  onClick() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
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
