export default class RobinhoodAccountsClient {
  async fetchAccounts () {
    const response = await fetch(`/api/accounts`)
    if (!response.ok) {
      throw new Error(`${await response.text()}`)
    }
    return await response.json()
  }
}
