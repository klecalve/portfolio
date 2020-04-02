import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  state = {
    redirection: false
  };

  render() {
    const mystyle = {
      color: "#33b5e5",
      textDecoration: "none"
    };

    return (
      <nav className="navbar">
        <ul>
          <NavLink
            exact
            to="/"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>HOME</li>
          </NavLink>
          <NavLink
            exact
            to="/about"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>ABOUT</li>
          </NavLink>
          <NavLink
            exact
            to="/contact"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>CONTACT</li>
          </NavLink>
          <NavLink
            exact
            to="/Curriculum"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>CV</li>
          </NavLink>
          <NavLink
            exact
            to="/linkedin"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>LINKEDIN</li>
          </NavLink>
          <NavLink
            exact
            to="/github"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>GITHUB</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
