import router from './router/index'
import store from './store/index'
import {render, html} from 'lit-html/lib/lit-extended'
import './components/store-provider/connected'

router.on('route', async (args, routing) => {
  Object.assign(args.context, { store })
  const view = await routing
  if (view) {
    render(html`<store-provider store="${store}">${view}</store-provider>`, document.body)
  }
}).start()
