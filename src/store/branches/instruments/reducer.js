import objectifyArray from 'objectify-array'
import {SET_INSTRUMENTS} from "./action-types";

export default function reducer (state = {}, {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_INSTRUMENTS:
      return Object.assign({}, state, objectifyArray(payload.results, {by: 'instrument'}))

    default:
      return state
  }
}
