import React, {Component} from 'react'

import {connect} from 'react-redux'

class ShoppingCart extends Component {
  render () {
    return (
      <div style={{border: '1px solid gray', width: '50%'}}>
        <h3>My Cart</h3>
        <ul className='GS-inventory'>
          {this.props.userCart.map((cartItem, index) => {
            return <li key={index}>{cartItem.item}</li>
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

var ConnectedShoppingCart = connect(mapStateToProps)(ShoppingCart)

export default ConnectedShoppingCart
