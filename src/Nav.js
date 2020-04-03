import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
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
            to="/about"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>ABOUT</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>CONTACT</li>
          </NavLink>
          <NavLink
            to="/Curriculum"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>CV</li>
          </NavLink>
          <NavLink
            to="/linkedin"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>LINKEDIN</li>
          </NavLink>
          <NavLink
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
