import React from "react";
import "./App.css";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="bodyApp">
        <div className="mainApp">
          <h1>formulaire qui envoie un mail</h1>
          <div className="mainContainer">
            <div className="formContainer"></div>
          </div>
        </div>
      </div>
    );
  }
}
