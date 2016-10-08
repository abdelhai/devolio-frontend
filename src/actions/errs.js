import types from '../constants/ActionTypes'
import axios from 'axios'

export const authError = (error) => ({
  type: types.AUTH_ERROR,
  payload: error
})