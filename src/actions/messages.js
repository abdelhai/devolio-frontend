import types from '../constants/ActionTypes'

export const newMessage = (message) => ({
  type: types.NEW_MESSAGE,
  payload: message

})