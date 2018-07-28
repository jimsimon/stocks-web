import { SET_TOKEN } from '../action-types/tokens'

export function setToken (token) {
  return {
    type: SET_TOKEN,
    payload: token
  }
}
