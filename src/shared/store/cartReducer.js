const defaultState = []

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter((item) => item !== action.payload)
    default:
      return state;
  }
}

export const addToCartAction = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCartAction = (payload) => ({type: REMOVE_FROM_CART, payload})