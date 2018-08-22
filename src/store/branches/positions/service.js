import {selectToken} from "../authentication/selectors";
import {setPositions} from "./actions";

export default class PositionsService {
  constructor (robinhoodPositionsClient, store) {
    this.robinhoodPositionsClient = robinhoodPositionsClient
    this.store = store
  }

  async fetchPositions () {
    const token = selectToken(this.store.getState())
    const watchlist = await this.robinhoodPositionsClient.fetchPositions({token})
    this.store.dispatch(setPositions(watchlist))
  }
}
