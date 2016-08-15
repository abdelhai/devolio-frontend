import types from '../constants/ActionTypes'

const initialState = {
  messages: [
    {user: '@mustafa', body: 'hello'},
    {user: '@mustafa', body: 'world'},
  ]
}
export function messages(state=initialState, action) {
  switch (action.type) {
    case types.NEW_MESSAGE: {
      console.log(action.payload)
      const messages = [...state.messages]
      return {...state, messages: messages.concat(action.payload)}
    }
    default:
      return state
  }
}
