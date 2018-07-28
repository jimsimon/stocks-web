import {selectToken} from "../authentication/selectors";
import {setWatchlist} from "./actions";

export default class WatchlistService {
  constructor (robinhoodWatchlistClient, store) {
    this.robinhoodWatchlistClient = robinhoodWatchlistClient
    this.store = store
  }

  async fetchWatchlist () {
    const token = selectToken(this.store.getState())
    const watchlist = await this.robinhoodWatchlistClient.fetchWatchlist({token})
    this.store.dispatch(setWatchlist(watchlist))
  }
}
