module.exports = {
  setCookie (name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) + ((!expiredays) ? '' : ';expires=' + exdate.toGMTString()) + '; path=/'
  },
  getCookie (name) {
    var arr; var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) { return (arr[2]) } else { return null } // eslint-disable-line
  },
  clearAllCookie (name) {
    var date = new Date()
    date.setTime(date.getTime() - 10000)
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g) // eslint-disable-line
    if (keys) {
      if (!name) {
        for (var i = keys.length; i--;) { document.cookie = keys[i] + "=''; expire=" + date.toGMTString() + '; path=/' }
      } else {
        document.cookie = name + "=''; expire=" + date.toGMTString() + '; path=/'
      }
    }
  }
}
