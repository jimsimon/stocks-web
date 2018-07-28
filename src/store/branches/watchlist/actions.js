import {callService} from "../../middleware/service-middleware";
import {SET_WATCHLIST} from "./action-types";

export function fetchWatchlist () {
  return callService(
    'watchlist',
    'fetchWatchlist'
  )
}

export function setWatchlist (watchlist) {
  return {
    type: SET_WATCHLIST,
    payload: watchlist
  }
}
