import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewContactForm from './NewContactForm';
import ShowContacts from './ShowContacts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "a_name",
      email: "an_email",
      phone: "a_phoneNumber",
      address: "an_address",
      city: "a_city",
      state: "a_state",
      zip: "a_zip"
    }
    this.updateContact = this.updateContact.bind(this);
  }

  updateContact(aContact) {
    this.setState({
      name: aContact.name,
      email: aContact.email,
      phone: aContact.phone,
      address: aContact.address,
      city: aContact.city,
      state: aContact.state,
      zip: aContact.zip
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Josh's React App</h1>
        </header>
        <p className="App-intro">
          Let's start by putting my shit here first!
        </p>
        <NewContactForm {...this.state} onUpdateContact={this.updateContact} />
        <ShowContacts {...this.state} />
      </div>
    );
  }
}

export default App;