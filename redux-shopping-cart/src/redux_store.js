import { createStore } from 'redux'
import groceryStore from './redux_reducers'

var store = createStore(groceryStore)

export default store
