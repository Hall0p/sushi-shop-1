const defaultState = {
  rolls: [],
  sets: [],
}

const ADD_ROLL_CART = 'ADD_ROLL_CART'
const REMOVE_ROLL_CART = 'REMOVE_ROLL_CART'
const ADD_SET_CART = 'ADD_SET_CART'
const REMOVE_SET_CART = 'REMOVE_SET_CART'

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ROLL_CART:
      return {...state, rolls: [...state.rolls, action.payload]}
    case REMOVE_ROLL_CART: {
      const copyRolls = state.rolls.slice()
      const index = copyRolls.indexOf(action.payload)
      copyRolls.splice(index,1)

      return {...state, rolls: copyRolls}
    }
    case ADD_SET_CART:
      return {...state, sets: [...state.sets, action.payload]}
    case REMOVE_SET_CART: {
      const copySets = state.sets.slice()
      const index = copySets.indexOf(action.payload)
      copySets.splice(index,1)

      return {...state, sets: copySets}
    }
    default:
      return state;
  }
}

export const addRollCartAction = (payload) => ({type: ADD_ROLL_CART, payload})
export const removeRollCartAction = (payload) => ({type: REMOVE_ROLL_CART, payload})
export const addSetCartAction = (payload) => ({type: ADD_SET_CART, payload})
export const removeSetCartAction = (payload) => ({type: REMOVE_SET_CART, payload})