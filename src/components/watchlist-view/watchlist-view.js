import {LitElement, html} from '@polymer/lit-element'
import {unsafeHTML} from 'lit-html/lib/unsafe-html'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/paper-input/paper-input'
import '@material/mwc-button'
import '@material/mwc-icon'
import { connect } from '../../mixins/connect'
import '../stocks-app/stocks-app.js'
import styles from './watchlist-view.css'
import {selectWatchlist} from "../../store/branches/watchlist/selectors";
import {fetchWatchlist} from "../../store/branches/watchlist/actions";
import {selectInstruments} from "../../store/branches/instruments/selectors";
import {fetchInstruments} from "../../store/branches/instruments/actions";

class WatchlistView extends LitElement {
  static get properties () {
    return {
      watchlist: Object,
      fetchWatchlist: Function,
      instruments: Object,
      fetchInstruments: Function
    }
  }

  constructor () {
    super()
    this.watchlist = {
      results: []
    }
    this.instruments = []
  }

  connectedCallback () {
    super.connectedCallback()
    this.fetchWatchlist()

    this._fetchInstruments()
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    clearTimeout(this.timeout)
  }

  _render ({watchlist, instruments}) {
    return html`
      ${unsafeHTML(`<style>${styles}</style>`)}
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody>
          ${this._renderRows(instruments)}
        </tbody>
      </table>
    `
  }

  _renderRows (instruments) {
    return instruments.map(i => {
      return html`
        <tr>
          <td>${i.symbol}</td>
          <td>${i.last_trade_price}</td>
          <td>${i.symbol}</td>
          <td>${i.symbol}</td>
        </tr>
      `
    })
  }

  _fetchInstruments () {
    this.timeout = setTimeout(async () => {
      const instruments = this.watchlist.results.map(r => r.instrument)
      await this.fetchInstruments(instruments)
      this._fetchInstruments()
    }, 3000)
  }
}

function mapStateToProps (state) {
  return {
    instruments: selectInstruments(state),
    watchlist: selectWatchlist(state)
  }
}

const mapDispatchToProps = {
  fetchInstruments,
  fetchWatchlist
}

customElements.define('watchlist-view', connect(WatchlistView, mapStateToProps, mapDispatchToProps))
