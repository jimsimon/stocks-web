import Router from 'middle-router'
import {html} from 'lit-html'

export default Router()
  .use('/', ({resolve}) => {
    resolve(html`<div>Bananas</div>`)
  })
