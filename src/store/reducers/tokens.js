import {SET_TOKEN} from '../action-types/tokens'

export default function reducer (state = {}, {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        user: payload
      })

    default:
      return state
  }
}
