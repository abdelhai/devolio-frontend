import types from '../constants/ActionTypes'

export const getMessages = () => ({
  type: types.GET_MESSAGES,
  payload: [
    {payload: 'hello', username: 'mustafa'},
    {payload: 'world', username: 'mustafa'},
  ]
})

export const postMessage = (message) => ({
  type: types.POST_MESSAGE,
  payload: message
})