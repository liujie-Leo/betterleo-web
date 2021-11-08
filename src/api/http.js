import axios from 'axios'
import token from '@/utils/token'
// import Nrogress from 'nprogress'
import { Message } from 'element-ui'
export default class Http {
  constructor (callbackLogin) {
    this.callbackLogin = callbackLogin
    this.axiosInstance = axios.create()
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    this.axiosInstance.defaults.baseURL = process.env.VUE_APP_URL
    this.axiosInstance.interceptors.request.use(
      async config => {
        const accessToken = token.getToken()
        if (accessToken) {
          config.headers.authorization = accessToken
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    this.axiosInstance.interceptors.response.use(
      res => {
        if (res.status.toString().slice(0, 1) === '2' || res.status === 304) {
          const resData = res.data
          if (resData.status === 10000) {
            return Promise.resolve(resData)
          } else {
            // Message({
            //   message: resData.message,
            //   type: 'error'
            // })
            return Promise.reject(resData)
          }
        } else {
          this.$message.error(res.message)
          return Promise.reject(res.data)
        }
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  request (config) {
    // Nrogress.start()
    return new Promise((resolve, reject) => {
      this.axiosInstance.request(config).then(
        res => {
          resolve(res)
        },
        err => {
          this.error(err, reject)
        }
      )
    })
  }

  get (url, params, options) {
    return this.request({
      url,
      method: 'get',
      params,
      ...options
    })
  }

  post (url, data, options) {
    return this.request({
      url,
      method: 'post',
      data,
      ...options
    })
  }

  delete (url, data, options) {
    return this.request({
      url,
      method: 'delete',
      data,
      ...options
    })
  }

  put (url, data, options) {
    return this.request({
      url,
      method: 'put',
      data,
      ...options
    })
  }

  error (err, reject) {
    var errorCode = [20001]
    if (errorCode.includes(err.status)) {
      // token失效
      this.callBackLogin && this.callBackLogin()
      return true
    }
    let message = err.message
    if (message === undefined) {
      message = '网络请求失败,请检查您的网络设置'
    }
    Message({
      message: message,
      type: 'error',
      showClose: true
    })
    reject(err)
  }
}
