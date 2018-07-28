import Router from 'middle-router'
import {html} from 'lit-html'
import '../../components/login-view/login-view.js'

export default Router()
  .use('/', ({resolve}) => {
    resolve(html`<login-view></login-view>`)
  })
