import types from '../constants/ActionTypes'

const initialState = {
  error: false,
  message: null
}
export function err(state=initialState, action) {
  switch (action.type) {
    case types.AUTH_ERROR: {
      return {error: true, message: action.payload}
    }
    default:
      return state
  }
}
