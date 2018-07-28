export default class RobinhoodWatchlistClient {
  async fetchWatchlist ({token}) {
    const response = await fetch(`/api/watchlists/Default/`, {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    if (!response.ok) {
      throw new Error(`${await response.text()}`)
    }
    return await response.json()
  }
}
