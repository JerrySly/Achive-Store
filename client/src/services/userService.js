import axios from 'axios'
class UserService {
  async registration (userInfo) {
    const result = await axios.post('/sing-up', userInfo)
    return result
  }

  async login (email, password) {
    const result = (await axios.post('/login', { email, password }))
    if (result.data.error) {
      return result.data
    }
    this._setTokenInfo(result.data)
    this.setAuthorizationHeader(result.data.token)
    return result.data
  }

  isLogin () {
    return !!localStorage.getItem('token')
  }

  async getUser (id) {
    return (await axios.get('/user/' + id)).data
  }

  async getCurrentUser () {
    const user = (await axios.get('/user/0')).data
    const { id, name, surname, email, photo } = user
    return { id, name, surname, email, photo }
  }

  setAuthorizationHeader (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  async refreshToken () {
    const preRefreshToken = localStorage.getItem('refreshToken')
    const result = (
      await axios.post('/refresh', { refreshToken: preRefreshToken })
    ).data
    this._setTokenInfo(result)
  }

  _setTokenInfo ({ token, refreshToken }) {
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)
  }
}

export default new UserService()
