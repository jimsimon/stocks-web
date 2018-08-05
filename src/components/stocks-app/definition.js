import {LitElement, html} from '@polymer/lit-element'
import {unsafeHTML} from 'lit-html/lib/unsafe-html'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@material/mwc-button'
import '@material/mwc-icon'
import styles from './styles.css'

export class StocksApp extends LitElement {
  _render(props) {
    return html`
      ${unsafeHTML(`<style>${styles}</style>`)}
      <app-header reveals>
        <app-toolbar id="headerToolbar">
          <mwc-button onclick="${this.toggleDrawer.bind(this)}">
            <mwc-icon>menu</mwc-icon>
          </mwc-button>
          <div main-title>My app</div>
          <mwc-icon>search</mwc-icon>
        </app-toolbar>
      </app-header>
      <app-drawer id="drawer" swipe-open>
        <nav id="drawerNav">
          <ul>
            <li><a>Account</a></li>
            <li><a>Settings</a></li>
            <li><a>Help</a></li>
          </ul>
        </nav>
      </app-drawer>
      <div id="content">
        <slot></slot>
      </div>
      <nav id="bottomNav">
        <a href="/watchlist">Watchlist</a>
        <a href="/positions">Positions</a>
      </nav>
    `
  }

  toggleDrawer () {
    this.shadowRoot.querySelector('#drawer').toggle()
  }
}
