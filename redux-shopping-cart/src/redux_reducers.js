var initialState = {
  userCart: ['nada'],
  groceryItems: ['Milk', 'Eggs', 'Steak', 'Bread', 'Broccoli', 'Potatoes']
}
export function groceryStore (state, action) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      console.log('in redux_reducer.js ADD_ITEM_TO_CART')
      // 1. make copy of the state
      var new_state = {...state}
      new_state.userCart = [...state.userCart]
      // 2. update the state
      new_state.userCart.push(action.data)
      // 3. return the new state
      return new_state
    default:
      return state
  }
}

export default groceryStore
