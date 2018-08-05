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

if (module.hot) {
  // HMR doesn't work with custom elements because "register" ends up called multiple times with the same tag name
  // and constructor, so the best we can do is save off the state to make full reloads friendlier
  store.subscribe(() => sessionStorage.setItem('state', JSON.stringify(store.getState())))
}
