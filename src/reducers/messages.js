const initialState = {
    fetched: false,
    messages: []
}

export function messages(state=initialState, action) {
    console.log('hello from sendMessage')
    return state
}