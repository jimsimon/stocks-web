import Router from 'middle-router'
import {html} from 'lit-html'
import '../../components/page-not-found-view/connected.js'

export default Router()
  .use(({resolve}) => {
    resolve(html`<page-not-found-view></page-not-found-view>`)
  })
