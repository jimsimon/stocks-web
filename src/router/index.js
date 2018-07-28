import Router from 'middle-router'
import {selectUserToken} from "../store/selectors/tokens";

export default Router()
  .use(async ({router, context: { store }, path, resolve}) => {
    const loggedIn = selectUserToken(store.getState())
    if (!loggedIn && path !== '/login') {
      router.navigate('/login')
      resolve()
    }
  })
  .lazy('/login', async () => {
    return (await import(
      /* webpackChunkName: 'login' */
      './routes/login.js'
      )).default
  })
  .lazy('/', async () => {
    return (await import(
      /* webpackChunkName: 'bananas' */
      './routes/bananas.js'
      )).default
  })
