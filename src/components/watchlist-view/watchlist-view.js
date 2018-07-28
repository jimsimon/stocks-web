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

class WatchlistView extends LitElement {
  static get properties () {
    return {
      watchlist: Array,
      fetchWatchlist: Function
    }
  }

  connectedCallback () {
    super.connectedCallback()
    this.fetchWatchlist()
  }

  _render ({watchlist}) {
    return html`
      ${unsafeHTML(`<style>${styles}</style>`)}
      <table>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Last</th>
          <th>Change</th>
          <th>Change %</th>
        </tr>
      </table>
    `
  }
}

function mapStateToProps (state) {
  return {
    watchlist: selectWatchlist(state)
  }
}

const mapDispatchToProps = {
  fetchWatchlist
}

customElements.define('watchlist-view', connect(WatchlistView, mapStateToProps, mapDispatchToProps))
