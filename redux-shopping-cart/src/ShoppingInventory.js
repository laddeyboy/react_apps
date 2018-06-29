import React, {Component} from 'react'
import './AddItemModal'

import {addItem} from './redux_actions'
import {connect} from 'react-redux'

class ShoppingInventory extends Component {
  onAddItem (groceryItem) {
    // groceryItem is an event -> so... groceryItem.target.id = the actual groceryItem
    let newCartItem = groceryItem.target.id
    this.props.onSubmit(newCartItem)
  }

  render () {
    return (
      <div style={{border: '1px solid gray', width: '50%'}}>
        <h3>Store Inventory</h3>
        <ul className='GS-inventory'>
          {this.props.groceryItems.map((groceryItem, index) => {
            return <li key={index}>{groceryItem}<button id={groceryItem}
              onClick={this.onAddItem}>
              Add to Cart</button></li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userCart: state.userCart,
    groceryItems: state.groceryItems
  }
}
function mapDispatchToProps (dispatch) {
  return {
    // this onSubmit is taking 'data' and calling addItem in ./redux_actions.js
    onSubmit: function (data) {
      console.log('data is: ', data)
      dispatch(addItem(data))
    }
  }
}

var AddItemToCartForm = connect(mapStateToProps, mapDispatchToProps)(ShoppingInventory)

export default AddItemToCartForm
