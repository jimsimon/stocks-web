import {fetchWatchlist} from "../../store/branches/watchlist/actions";
import {connect} from "../../mixins/connect";
import {selectWatchlist} from "../../store/branches/watchlist/selectors";
import {fetchInstruments} from "../../store/branches/instruments/actions";
import {selectInstruments} from "../../store/branches/instruments/selectors";
import {WatchlistView} from "./definition";

function mapStateToProps (state) {
  const watchlist = selectWatchlist(state)
  const instruments = watchlist.results.map(r => r.instrument)
  return {
    instruments: selectInstruments(state, instruments),
    watchlist: watchlist
  }
}

const mapDispatchToProps = {
  fetchInstruments,
  fetchWatchlist
}

customElements.define('watchlist-view', connect(WatchlistView, mapStateToProps, mapDispatchToProps))
