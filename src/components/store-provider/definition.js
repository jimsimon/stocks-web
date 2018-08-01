import {LitElement, html} from '@polymer/lit-element'

export class StoreProvider extends LitElement {
  static get properties () {
    return {
      store: Object
    }
  }

  _render () {
    return html`<slot></slot>`
  }
}

