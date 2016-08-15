import types from '../constants/ActionTypes'

const initialState = {
  spaces: [
    {name: 'Python', id: 1},
    {name: 'JavaScript', id: 2},
    ],
  channels: [
    {name: '# beginners', id: 1},
    {name: '# advanced', id: 2},
    ]

}
export function channels(state=initialState, action) {
  return state
}
