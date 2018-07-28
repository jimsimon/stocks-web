import {setToken} from "./actions";

export default class AuthenticationService {
  constructor (robinhoodAuthenticationClient, store) {
    this.robinhoodAuthenticationClient = robinhoodAuthenticationClient
    this.store = store
  }

  async login ({username, password}) {
    const token = await this.robinhoodAuthenticationClient.login({username, password})
    this.store.dispatch(setToken(token))
  }
}
