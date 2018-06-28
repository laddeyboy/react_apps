import React, {Component} from 'react'

class ShoppingInventory extends Component {
  render () {
    return (
      <div style={{border: '1px solid gray', width: '50%'}}>
        <h3>Store Inventory</h3>
        <ul className='GS-inventory'>
          <li>Milk<button>Add to Cart</button></li>
          <li>Eggs<button>Add to Cart</button></li>
          <li>Steak<button>Add to Cart</button></li>
          <li>Bread<button>Add to Cart</button></li>
          <li>Broccoli<button>Add to Cart</button></li>
          <li>Potatoes<button>Add to Cart</button></li>
        </ul>
      </div>
    )
  }
}

export default ShoppingInventory
