export default class RobinhoodInstrumentsClient {
  async fetchInstruments ({instruments}) {
    const response = await fetch(`/api/marketdata/quotes/?instruments=${instruments.join(',')}`)
    if (!response.ok) {
      throw new Error(`${await response.text()}`)
    }
    return await response.json()
  }
}
