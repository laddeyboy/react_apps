import React from 'react'

class ShowContacts extends React.Component {
  render () {
    var contacts = []
    if (this.props.contacts.length) {
      contacts = this.props.contacts.map((contact, index) => {
        console.log('What is contact', contact)
        return (
          <div key={index}>
            <label>{contact.name}</label><br />
            <label>{contact.email}</label><br />
            <label>{contact.phone}</label><br />
            <label>{contact.address}</label><br />
            <label>{contact.city}</label><br />
            <label>{contact.state}</label><br />
            <label>{contact.zip}</label><br />
          </div>
        )
      })
    }

    return (
      <div>
        <h2>Here are your contacts:</h2>
        <ul style={{backgroundColor: 'blue', color: 'white'}}>{contacts}</ul>
      </div>
    )
  }
}

export default ShowContacts
