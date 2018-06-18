import React from 'react'

class NewContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const NewContact = {
      name: e.target.name.value,
      email: e.target.ename.value,
      phone: e.target.phoneNumber.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value
    }
    this.props.onUpdateContact(NewContact)
  }
  render () {
    return (
      <div>
        <h2>Enter a new contact here:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" /><br />
          <input type="text" name="ename" placeholder="Email" /><br />
          <input type="text" name="phoneNumber" placeholder="Phone Number" /><br />
          <input type="text" name="address" placeholder="Address" /><br />
          <input type="text" name="city" placeholder="City" /><br />
          <input type="text" name="state" placeholder="State" /><br />
          <input type="text" name="zip" placeholder="Zip" /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewContactForm
