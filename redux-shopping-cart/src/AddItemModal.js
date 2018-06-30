import React, {Component} from 'react'

class AddItemModal extends Component {
  render () {
    if (this.props.isOpen === false) {
      return null
    }
    return (
      <div className='modal'>
      Add to Cart
        <div className='modal-window'>
          How many do you want to add?
          <select>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
          </select>
        </div>
      </div>
    )
  }
}

export default AddItemModal
