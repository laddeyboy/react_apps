import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import NewContactForm from './NewContactForm'
import ShowContacts from './ShowContacts'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'a_name',
      email: 'an_email',
      phone: 'a_phoneNumber',
      address: 'an_address',
      city: 'a_city',
      state: 'a_state',
      zip: 'a_zip',
      contacts: []
    }
    this.updateContact = this.updateContact.bind(this)
  }

  updateContact (aContact) {
    var contacts = [...this.state.contacts, aContact]
    this.setState({contacts: contacts})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Josh's React App</h1>
        </header>
        <p className="App-intro">
          Let's start by putting stuff here first!
        </p>
        {/* {console.log('What is contacts array ', this.state.contacts)} */}
        <NewContactForm {...this.state} onUpdateContact={this.updateContact} />
        <ShowContacts {...this.state} />
      </div>
    )
  }
}

export default App
