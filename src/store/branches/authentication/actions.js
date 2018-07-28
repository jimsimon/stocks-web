import { SET_TOKEN } from './action-types'
import {callService} from "../../middleware/service-middleware";

export function login (username, password) {
  return callService (
    'authentication',
    'login',
    [{username, password}]
  )
}

export function setToken (token) {
  return {
    type: SET_TOKEN,
    payload: token
  }
}
