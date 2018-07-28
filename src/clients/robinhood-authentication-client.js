export default class RobinhoodAuthenticationClient {
  async login ({username, password}) {
    const body = new URLSearchParams()
    body.append('username', username)
    body.append('password', password)
    const response = await fetch(`/api/api-token-auth/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    if (!response.ok) {
      throw new Error(`${await response.text()}`)
    }
    const {token} = await response.json()
    return token
  }
}
