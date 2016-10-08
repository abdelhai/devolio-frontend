import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { messages } from './messages'
import { spaces } from './spaces'
import { user } from './user'
import { err } from './err'

const rootReducer = combineReducers({
    messages,
    spaces,
    user,
    err,
    routing: routerReducer
})

export default rootReducer
