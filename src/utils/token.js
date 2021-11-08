const cookie = require('./cookie')

module.exports = {
  setToken (value) {
    cookie.setCookie('token', value)
  },
  getToken () {
    return cookie.getCookie('token')
  },
  removeToken () {
    cookie.clearAllCookie('token')
  }
}
