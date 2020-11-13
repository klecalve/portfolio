import React from "react";
import "./App.css";
import "./Contact.css";

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      textarea: ''
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
    console.log(this.state);
  }

  render() {
    return (
      <div className="bodyApp">
        <div className="mainApp">
          <h1>CONTACTEZ-MOI</h1>
          <div className="mainContainer">
            <div className="formContainer">
              <form>
                <label>
                  <input name="firstName" placeholder="Nom" type="text" value={this.state.firstName} onChange={e => this.change(e)} />
                </label>
                <br/>
                <label>
                  <input name="lastName" placeholder="Prenom" type="text" value={this.state.lastName} onChange={e => this.change(e)} />
                </label>
                <br/>
                <label>
                  <input name="email" placeholder="Email" type="text" value={this.state.email} onChange={e => this.change(e)} />
                </label>
                <br/>
                <textarea name="textarea" placeholder="Hello There !" value={this.state.textarea} onChange={e => this.change(e)} />
                <br/>
                <button onClick={e => this.onSubmit(e)}>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
