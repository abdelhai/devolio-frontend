import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { messages } from './messages'
import { channels } from './channels'

const rootReducer = combineReducers({
    messages,
    channels,
    routing: routerReducer
})

export default rootReducer
