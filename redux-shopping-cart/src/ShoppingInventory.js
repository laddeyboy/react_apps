import React, {Component} from 'react'
import './AddItemModal'

class ShoppingInventory extends Component {
  onAddItem () {
    console.log('HELLO')
  }

  render () {
    return (
      <div style={{border: '1px solid gray', width: '50%'}}>
        <h3>Store Inventory</h3>
        <ul className='GS-inventory'>
          {this.props.storeInv.map(groceryItem => {
            return <li>{groceryItem}<button onClick={this.onAddItem}>Add to Cart</button></li>
          })}
        </ul>
      </div>
    )
  }
}

export default ShoppingInventory
