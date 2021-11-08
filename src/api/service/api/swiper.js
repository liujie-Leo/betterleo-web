import BaseService from '../base'
export default class IndexService extends BaseService {
  constructor () {
    super('/api/swiper')
  }

  /**
   * 获取轮播图列表
   * @param {*} data
   */
  getSwiperList (data) {
    return super.get('getSwiperList', data)
  }
}
