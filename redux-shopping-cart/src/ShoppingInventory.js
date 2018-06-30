import React, {Component} from 'react'
import './AddItemModal'

import {addItem} from './redux_actions'
import {connect} from 'react-redux'

class ShoppingInventory extends Component {
  constructor (props) {
    super(props)
    this.onAddItem = this.onAddItem.bind(this)
  }

  onAddItem (groceryItem) {
    // groceryItem is an event -> so... groceryItem.target.id = the actual groceryItem
    let newCartItem = groceryItem.target.id
    // console.log('cartItem', newCartItem)
    this.props.onSubmit(newCartItem)
  }

  render () {
    return (
      <div style={{border: '1px solid gray', width: '50%'}}>
        <h3>Store Inventory</h3>
        <ul className='GS-inventory'>
          {this.props.groceryItems.map((groceryItem, index) => {
            return <li key={index}>{groceryItem.item}<button id={groceryItem.item}
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
      dispatch(addItem(data))
    }
  }
}

var AddItemToCartForm = connect(mapStateToProps, mapDispatchToProps)(ShoppingInventory)

export default AddItemToCartForm
