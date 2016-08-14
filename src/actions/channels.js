// channels are organized in 'Spaces'
export function getSpaces(){
    return {
        type: 'GET_SPACES',
        payload: [
                {name: 'Python', id: 1},
                {name: 'JavaScript', id: 2},
            ]
    }
}

export function getChannels(){
    return {
        type: 'GET_CHANNELS',
        payload: [
                {name: '# beginners', id: 1},
                {name: '# advanced', id: 2},
            ]
    }
}