import {SET_WATCHLIST} from "./action-types";

export default function reducer (state = {}, {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_WATCHLIST:
      return Object.assign({}, state, payload)

    default:
      return state
  }
}
