import React, {Component} from 'react'
import './AddItemModal'

import {addItem} from './redux_actions'
import {connect} from 'react-redux'

function ShoppingInventory (props) {
  return (
    <div style={{border: '1px solid gray', width: '50%'}}>
      <h3>Store Inventory</h3>
      <ul className='GS-inventory'>
        {props.groceryItems.map((groceryItem, index) => {
          const clickFn = function (_evt) {
            console.log('groceryItem', groceryItem)
            props.onSubmit(groceryItem)
          }
          return <li key={index}>{groceryItem.item}<button id={groceryItem.item}
            onClick={clickFn}>
              Add to Cart</button></li>
        })}
      </ul>
    </div>
  )
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
