import {SET_INSTRUMENTS} from "./action-types";

export default function reducer (state = [], {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_INSTRUMENTS:
      return payload.results

    default:
      return state
  }
}
