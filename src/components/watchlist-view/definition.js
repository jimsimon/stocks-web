import {LitElement, html} from '@polymer/lit-element'
import {unsafeHTML} from 'lit-html/lib/unsafe-html'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/paper-input/paper-input'
import '@material/mwc-button'
import '@material/mwc-icon'
import '../stocks-app/connected.js'
import styles from './styles.css'

export class WatchlistView extends LitElement {
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
      <stocks-app>
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
      </stocks-app>
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
