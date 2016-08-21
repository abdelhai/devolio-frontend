import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { messages } from './messages'
import { channels } from './channels'
import { user } from './user'

const rootReducer = combineReducers({
    messages,
    channels,
    user,
    routing: routerReducer
})

export default rootReducer
