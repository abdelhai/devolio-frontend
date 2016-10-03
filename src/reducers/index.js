import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { messages } from './messages'
import { spaces } from './spaces'
import { user } from './user'

const rootReducer = combineReducers({
    messages,
    spaces,
    user,
    routing: routerReducer
})

export default rootReducer
