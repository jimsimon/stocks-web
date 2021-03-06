import Router from 'middle-router'
import {selectToken} from "../store/branches/authentication/selectors";

export default Router()
  .use(async ({router, context: { store }, path, resolve}) => {
    const loggedIn = selectToken(store.getState())
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
  .lazy('/watchlist', async () => {
    return (await import(
      /* webpackChunkName: 'watchlist' */
      './routes/watchlist.js'
      )).default
  })
  .lazy('/positions', async () => {
    return (await import(
      /* webpackChunkName: 'watchlist' */
      './routes/positions.js'
      )).default
  })
  .lazy(async () => {
    return (await import(
      /* webpackChunkName: 'watchlist' */
      './routes/page-not-found.js'
      )).default
  })
