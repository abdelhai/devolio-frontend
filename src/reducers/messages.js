import types from '../constants/ActionTypes'
import { Socket } from 'phoenix'

// connecting to the socket, later I'll provide a production socket
const socket = new Socket('ws://localhost:4000/socket', {})
socket.connect()

// joining the #general channel. Just for testing.
const general = socket.channel('channel:general')
general.join()
export function messages(state={}, action) {
  switch (action.type) {
    case types.POST_MESSAGE: {
      //action.payload
      general.push("new_msg", {body: action.payload})
      return state
    }
    default:
      return state
  }
}
