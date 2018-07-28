import {callService} from "../../middleware/service-middleware";

export function navigateToWatchlist () {
  return navigate('/watchlist')
}

function navigate (path) {
  return callService (
    'navigation',
    'navigate',
    [path]
  )
}
