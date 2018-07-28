import { createStore, combineReducers, applyMiddleware } from 'redux'
import dynamicMiddlewares, { addMiddleware } from 'redux-dynamic-middlewares'
import serviceMiddlware from './middleware/service-middleware'
import router from '../router/index'
import NavigationService from "./branches/navigation/service"
import authenticationReducer from './branches/authentication/reducer'
import watchlistReducer from './branches/watchlist/reducer'
import AuthenticationService from "./branches/authentication/service";
import RobinhoodAuthenticationClient from "../clients/robinhood-authentication-client";
import WatchlistService from "./branches/watchlist/service";
import RobinhoodWatchlistClient from "../clients/robinhood-watchlist-client";

const store = createStore(
  combineReducers({
    authentication: authenticationReducer,
    watchlist: watchlistReducer
  }),
  applyMiddleware(dynamicMiddlewares)
)

const robinhoodAuthenticationClient = new RobinhoodAuthenticationClient()
const robinhoodWatchlistClient = new RobinhoodWatchlistClient()

addMiddleware(serviceMiddlware({
  authentication: new AuthenticationService(robinhoodAuthenticationClient, store),
  navigation: new NavigationService(router),
  watchlist: new WatchlistService(robinhoodWatchlistClient, store)
}))

export default store
