import Router from 'middle-router'
import {html} from 'lit-html'
import '../../components/watchlist-view/connected.js'

export default Router()
  .use('/', ({resolve}) => {
    resolve(html`<watchlist-view></watchlist-view>`)
  })
