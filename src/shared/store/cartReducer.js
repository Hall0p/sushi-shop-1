const defaultState = {
  rolls: [],
  sets: [],
}

const ADD_ROLL_CART = 'ADD_ROLL_CART'
const REMOVE_ROLL_CART = 'REMOVE_ROLL_CART'
const ADD_SET_CART = 'ADD_SET_CART'
const REMOVE_SET_CART = 'REMOVE_SET_CART'

export const cartReducer = (state = defaultState, action) => {
  let isDeleted = false

  switch (action.type) {
    case ADD_ROLL_CART:
      return {...state, rolls: [...state.rolls, action.payload]}
    case REMOVE_ROLL_CART:
      isDeleted = false
      return {...state, rolls:
        state.rolls.filter((roll) => {
          if (isDeleted) return true
          isDeleted = true
          return roll !== action.payload
        })
      }
    case ADD_SET_CART:
      return {...state, sets: [...state.sets, action.payload]}
    case REMOVE_SET_CART:
      isDeleted = false
      return {...state, sets:
          state.sets.filter((set) => {
            if (isDeleted) return true
            isDeleted = true
            return set !== action.payload
          })
      }
    default:
      return state;
  }
}

export const addRollCartAction = (payload) => ({type: ADD_ROLL_CART, payload})
export const removeRollCartAction = (payload) => ({type: REMOVE_ROLL_CART, payload})
export const addSetCartAction = (payload) => ({type: ADD_SET_CART, payload})
export const removeSetCartAction = (payload) => ({type: REMOVE_SET_CART, payload})