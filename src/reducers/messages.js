import types from '../constants/ActionTypes'

const initialState = {
  messages: []
}
export function messages(state=initialState, action) {
  switch (action.type) {
    case types.NEW_MESSAGE: {
      const messages = [...state.messages]
      return {...state, messages: messages.concat(action.payload)}
    }
    case types.FETCHED_SPACE_MESSAGES: {
      const messages = [...state.messages]
      return {...state, messages: messages.concat(action.payload.data.data)}
    }
    default:
      return state
  }
}
