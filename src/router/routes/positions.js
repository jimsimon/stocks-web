import Router from 'middle-router'
import {html} from 'lit-html'
import '../../components/positions-view/connected.js'

export default Router()
  .use('/', ({resolve}) => {
    resolve(html`<positions-view></positions-view>`)
  })
