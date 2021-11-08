import BaseService from '../base'
export default class IndexService extends BaseService {
  constructor () {
    super('/api')
  }

  /**
   * 上传文件
   * @param {*} data
   */
  upload (data) {
    return super.post('upload', data)
  }
}
