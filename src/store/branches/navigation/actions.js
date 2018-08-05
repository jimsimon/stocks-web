import {callService} from "../../middleware/service-middleware";

export function navigateToWatchlist () {
  return navigate('/watchlist')
}

export function navigateToPositions () {
  return navigate('/positions')
}

function navigate (path) {
  return callService (
    'navigation',
    'navigate',
    [path]
  )
}
