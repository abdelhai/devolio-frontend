import types from '../constants/ActionTypes'
import axios from 'axios'

const fullUrl = (path) => {
  return 'http://127.0.0.1:4000' + path
}

export const newMessage = (message) => ({
  type: types.NEW_MESSAGE,
  payload: message

})


export const fetchSpaceMessages = (spaceName) => ({
  type: types.FETCHED_SPACE_MESSAGES,
  payload: axios.get(fullUrl('/api/messages/' + spaceName))
})