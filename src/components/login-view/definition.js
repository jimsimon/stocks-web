import {LitElement, html} from '@polymer/lit-element'
import {unsafeHTML} from 'lit-html/lib/unsafe-html'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/paper-input/paper-input'
import '@material/mwc-button'
import '@material/mwc-icon'
import styles from './styles.css'

export class LoginView extends LitElement {
  static get properties () {
    return {
      errorMessages: Object,
      login: Function
    }
  }

  _render ({errorMessages: {username, password, non_field_errors} = {}}) {
    return html`
      ${unsafeHTML(`<style>${styles}</style>`)}
      ${this._renderNonFieldValidationMessages(non_field_errors)}
      <paper-input id="username" label="Email/Username" invalid="${username}" errorMessage="${username ? username[0] : ''}"></paper-input>
      <paper-input id="password" type="password" label="Password" invalid="${password}" errorMessage="${password ? password[0] : ''}"></paper-input>
      <mwc-button unelevated label="Login" on-click="${this.handleLogin.bind(this)}"></mwc-button>
    `
  }

  _renderNonFieldValidationMessages (non_field_errors) {
    if (!non_field_errors) {
      return null
    }

    return html`
      <div id="errorContainer">
        <span>One or more errors occurred while attempting to log in:</span>
        <ul>
          ${non_field_errors.map((m) => html`<li>${m}</li>`)}
        </ul>
      </div>
    `
  }

  async handleLogin () {
    this.errorMessages = {}
    const username = this.shadowRoot.querySelector('#username')
    const password = this.shadowRoot.querySelector('#password')
    try {
      await this.login(username.value, password.value)
      await this.navigateToWatchlist()
    } catch (e) {
      this.errorMessages = JSON.parse(e.message)
    }
  }
}
