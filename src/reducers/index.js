import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { messages } from './messages'
import { sockets } from './sockets'

const rootReducer = combineReducers({
    messages,
    sockets,
    routing: routerReducer
})

export default rootReducer
