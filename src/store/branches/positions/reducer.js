import {SET_POSITIONS} from "./action-types";

export default function reducer (state = init(), {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_POSITIONS:
      return Object.assign({}, state, payload)

    default:
      return state
  }
}

function init () {
  return {
    results: []
  }
}
