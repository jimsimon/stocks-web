import {LitElement, html} from '@polymer/lit-element'
import {unsafeHTML} from 'lit-html/lib/unsafe-html'
import '../stocks-app/connected.js'
import styles from './styles.css'

export class PageNotFoundView extends LitElement {
  _render (props) {
    return html`
      ${unsafeHTML(`<style>${styles}</style>`)}
      <stocks-app>
        Page Not Found
      </stocks-app>
    `
  }
}
