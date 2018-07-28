import {SET_TOKEN} from './action-types'

export default function reducer (state = {}, {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: payload
      })

    default:
      return state
  }
}
