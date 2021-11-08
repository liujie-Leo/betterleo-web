import BaseService from '../base'
export default class IndexService extends BaseService {
  constructor () {
    super('/api/user')
  }

  /**
   * 获取用户信息
   * @param {*} data
   */
  getUserInfo (data) {
    return super.get('getUserInfo', data)
  }

  /**
   * 获取用户信息
   * @param {*} data
   */
  getUserList (data) {
    return super.get('getUserList', data)
  }

  /**
   * 注册
   * @param {*} data
   */
  register (data) {
    return super.post('register', data)
  }

  /**
   * 登录
   * @param {*} data
   */
  login (data) {
    return super.post('login', data)
  }

  /**
   * 编辑
   * @param {*} data
   */
  editUserInfo (data) {
    return super.post('editUserInfo', data)
  }
}
