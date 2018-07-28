import {LitElement, html} from '@polymer/lit-element'

class StoreProvider extends LitElement {
  static get properties () {
    return {
      store: Object
    }
  }

  _render () {
    return html`<slot></slot>`
  }
}

customElements.define('store-provider', StoreProvider)
