import Http from '@/api/http'
const http = new Http()
export default class baseService {
  constructor (basePath) {
    this.basePath = basePath ? basePath + '/' : ''
  }

  get (url, data, options) {
    return http.get(this.basePath + url, data, options)
  }

  post (url, data, options) {
    return http.post(this.basePath + url, data, options)
  }

  delete (url, data, options) {
    return http.delete(this.basePath + url, data, options)
  }

  put (url, data, options) {
    return http.put(this.basePath + url, data, options)
  }
}
