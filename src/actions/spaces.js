import types from '../constants/ActionTypes'
import axios from 'axios'

const fullUrl = (path) => {
  return 'http://127.0.0.1:4000' + path
}

export const fetchSpaces = () => ({
  type: types.FETCHED_SPACES,
  payload: axios.get(fullUrl('/api/spaces'))
})

