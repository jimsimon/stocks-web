export default class RobinhoodPositionsClient {
  async fetchPositions ({token, nonzero = true}) {
    const response = await fetch(`/api/positions/?nonzero=${nonzero}`, {
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
