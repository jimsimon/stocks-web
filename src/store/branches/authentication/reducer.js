import {SET_TOKEN} from './action-types'

export default function reducer (state = initialize(), {type, payload, error}) {
  if (error) {
    return state
  }

  switch (type) {
    case SET_TOKEN:
      sessionStorage.setItem('token', payload)
      return Object.assign({}, state, {
        token: payload
      })

    default:
      return state
  }
}

function initialize () {
  return {
    token: sessionStorage.getItem('token')
  }
}
