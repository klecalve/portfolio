import React from "react";
import "./App.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bodyApp">
        <div className="mainApp">
          <h1>
            Présentation de moi-même, ce que j'aime, ce que je veux devenir
          </h1>
          <div className="mainContainer">
            <h1 className="mainContainerTitle">FORMATION</h1>
            <div className="container">
              <div className="insideContainer">
                <h2>1ere xp</h2>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
          <div className="mainContainer">
            <h1 className="mainContainerTitle">EXPERIENCE</h1>
            <div className="container">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
