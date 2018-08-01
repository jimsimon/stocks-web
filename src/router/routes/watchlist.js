import Router from 'middle-router'
import {html} from 'lit-html'
import '../../components/watchlist-view/watchlist-view.js'

export default Router()
  .use('/', ({resolve}) => {
    resolve(html`<watchlist-view></watchlist-view>`)
  })
