import types from '../constants/ActionTypes'

const initialState = {
  spaces: []
  }
export function spaces(state=initialState, action) {
  switch (action.type) {
    case types.FETCHED_SPACES: {
      const spaces = [...state.spaces]
      return {...state, spaces: spaces.concat(action.payload.data.data)}
    }
    default:
      return state
  }
}
