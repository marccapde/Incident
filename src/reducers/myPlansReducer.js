import { MY_PLANS_ACTIONS } from "../constants"

const INITIAL_STATE = {
  isFetching: false,
  plans: [],
  error: null
}

const myPlansReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MY_PLANS_ACTIONS.Requested:
      return {
        ...state,
        isFetching: true
      }
    case MY_PLANS_ACTIONS.Received:
      return {
        ...state,
        plans: action.payload,
        isFetching: false
      }
    case MY_PLANS_ACTIONS.Error:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}

export { myPlansReducer }