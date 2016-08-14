export function getMessages(){
    return {
        type: 'GET_MESSAGES',
        payload: [
            {payload: 'hello', username: 'mustafa'},
            {payload: 'world', username: 'mustafa'},
        ]
    }
}