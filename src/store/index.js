import { createStore, combineReducers, applyMiddleware } from 'redux'
import dynamicMiddlewares, { addMiddleware } from 'redux-dynamic-middlewares'
import serviceMiddlware from './middleware/service-middleware'
import router from '../router/index'
import NavigationService from "./branches/navigation/service"
import authenticationReducer from './branches/authentication/reducer'
import instrumentsReducer from './branches/instruments/reducer'
import watchlistReducer from './branches/watchlist/reducer'
import AuthenticationService from "./branches/authentication/service";
import RobinhoodAuthenticationClient from "../clients/robinhood-authentication-client";
import WatchlistService from "./branches/watchlist/service";
import RobinhoodWatchlistClient from "../clients/robinhood-watchlist-client";
import InstrumentService from "./branches/instruments/service";
import RobinhoodInstrumentsClient from "../clients/robinhood-instruments-client";

const store = createStore(
  combineReducers({
    authentication: authenticationReducer,
    instruments: instrumentsReducer,
    watchlist: watchlistReducer
  }),
  module.hot ? JSON.parse(sessionStorage.getItem('state')) || undefined : {},
  applyMiddleware(dynamicMiddlewares)
)

const robinhoodAuthenticationClient = new RobinhoodAuthenticationClient()
const robinhoodInstrumentsClient = new RobinhoodInstrumentsClient()
const robinhoodWatchlistClient = new RobinhoodWatchlistClient()

addMiddleware(serviceMiddlware({
  authentication: new AuthenticationService(robinhoodAuthenticationClient, store),
  instruments: new InstrumentService(robinhoodInstrumentsClient, store),
  navigation: new NavigationService(router),
  watchlist: new WatchlistService(robinhoodWatchlistClient, store)
}))

export default store
