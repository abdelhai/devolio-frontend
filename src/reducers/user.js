import types from '../constants/ActionTypes'

const initialState = {
  id: null,
  username: null,
  email: null,
  jwt: null,
  loggedin: false,
  error: false
}
export function user(state=initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN: {
      if (!action.error) {
        let data = action.payload.data
        return {
          ...state,
          id: data.id,
          username: data.username,
          email: data.email,
          jwt: data.jwt,
          loggedin: true,
        }
      } else {
        return {...state, error: true}
      }
    }
    case types.USER_LOGOUT: {
      // this will reset/empty the user's state
      return initialState
    }
    case types.USER_SIGNUP: {
      if (!action.error) {
        let data = action.payload.data
        return {
          ...state,
          id: data.id,
          username: data.username,
          email: data.email,
          jwt: data.jwt,
          loggedin: true,
        }
      } else {
        return {...state, error: true}
      }    }
    default:
      return state
  }
}
