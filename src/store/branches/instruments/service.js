import {setInstruments} from "./actions";

export default class InstrumentService {
  constructor (robinhoodInstrumentsClient, store) {
    this.robinhoodInstrumentsClient = robinhoodInstrumentsClient
    this.store = store
  }

  async fetchInstruments (instruments) {
    const fetchedInstruments = await this.robinhoodInstrumentsClient.fetchInstruments({instruments})
    this.store.dispatch(setInstruments(fetchedInstruments))
  }
}
