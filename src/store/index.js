import { createStore, combineReducers, applyMiddleware } from 'redux'
import dynamicMiddlewares, { addMiddleware } from 'redux-dynamic-middlewares'
import serviceMiddlware from './middleware/service-middleware'
import router from '../router/index'
import NavigationService from "./services/navigation-service"
import tokensReducer from './reducers/tokens'
import AuthenticationService from "./services/authentication-service";
import RobinhoodAuthenticationClient from "../clients/robinhood-authentication-client";

const store = createStore(
  combineReducers({
    user: function (state = {}, action) {
      return { message: 'booya' }
    },
    tokens: tokensReducer
  }),
  applyMiddleware(dynamicMiddlewares)
)

const robinhoodAuthenticationClient = new RobinhoodAuthenticationClient()

addMiddleware(serviceMiddlware({
  authentication: new AuthenticationService(robinhoodAuthenticationClient, store),
  navigation: new NavigationService(router)
}))

export default store
