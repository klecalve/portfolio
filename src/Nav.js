import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    const mystyle = {
      color: "#33b5e5",
      textDecoration: "none",
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
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink
            to="/about"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>SAVOIR-ÊTRE</li>
          </NavLink>
          <NavLink
            to="/skills"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>SAVOIR-FAIRE</li>
          </NavLink>
          <NavLink
            to="/exemples"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>EXEMPLES</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={mystyle}
            activeClassName="nav-link-active"
            className="nav-links"
          >
            <li>CONTACTEZ-MOI</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
