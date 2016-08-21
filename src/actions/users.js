import types from '../constants/ActionTypes'
import axios from 'axios'

const fullUrl = (path) => {
  return 'http://127.0.0.1:4000' + path
}

export const signUp = (username, email, password) => ({
  type: types.USER_SIGNUP,
  payload: axios.post(fullUrl('/api/users'), {username, email, password})
})

export const logIn = (username, password) => ({
  type: types.USER_LOGIN,
  payload: axios.post(fullUrl('/api/session'), {username, password})
})

export const logOut = () => ({
  type: types.USER_LOGOUT,
})