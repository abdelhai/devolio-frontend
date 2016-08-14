import types from '../constants/ActionTypes'

export function getMessages(){
    return {
        type: types.GET_MESSAGES,
        payload: [
            {payload: 'hello', username: 'mustafa'},
            {payload: 'world', username: 'mustafa'},
        ]
    }
}