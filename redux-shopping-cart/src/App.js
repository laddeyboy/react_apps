import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ShoppingCart from './ShoppingCart'
import ShoppingInventory from './ShoppingInventory'
import {Provider} from 'react-redux'
import store from './redux_store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Josh's Squishy Mart</h1>
          </header>

          <div className="GroceryStore-wrapper">
            <header>This is the top</header>
            <div className="Grocery-contents">
              <ShoppingInventory />
              <ShoppingCart />
            </div>
            <footer className='total-footer'>Total: $<span>(An Amount)</span></footer>
          </div>

        </div>
      </Provider>
    )
  }
}

export default App
