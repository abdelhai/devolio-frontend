import { Socket } from 'phoenix'

// connecting to the socket, later I'll provide a production socket
const socket = new Socket('ws://localhost:4000/socket', {})
socket.connect()

export default socket