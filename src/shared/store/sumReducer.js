const defaultState = {
  sum: 0
}

const INCREASE_SUM = 'INCREASE_SUM'
const DECREASE_SUM = 'DECREASE_SUM'

export const sumReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_SUM:
      return {...state, sum: state.sum + action.payload}
    case DECREASE_SUM:
      return {...state, sum: state.sum - action.payload}
    default: 
      return state
  }
}

export const increaseSumAction = (payload) => ({type: INCREASE_SUM, payload})
export const decreaseSumAction = (payload) => ({type: DECREASE_SUM, payload})