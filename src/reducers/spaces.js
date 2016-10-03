import types from '../constants/ActionTypes'

const initialState = {
  spaces: []
  }
export function spaces(state=initialState, action) {
  console.log('this ran')
  switch (action.type) {
    case types.FETCHED_SPACES: {
      console.log(action)
      const spaces = [...state.spaces]
      return {...state, spaces: spaces.concat(action.payload.data.data)}
    }
    default:
      return state
  }
}
