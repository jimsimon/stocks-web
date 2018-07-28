import {callService} from "./middleware/service-middleware";

export function login (username, password) {
  return callService (
    'authentication',
    'login',
    [{username, password}]
  )
}

export function navigateToDashboard () {
  return navigate('/')
}

function navigate (path) {
  return callService (
    'navigation',
    'navigate',
    [path]
  )
}
