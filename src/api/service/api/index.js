import BaseService from '../base'
export default class IndexService extends BaseService {
  constructor () {
    super('/api/index')
  }

  /**
   * 获取文章列表
   * @param {*} data
   */
  getArticleList (data) {
    return super.get('getArticleList', data)
  }

  /**
   * 获取tags分类列表
   * @param {*} data
   */
  getTagsList (data) {
    return super.get('getTagsList', data)
  }

  /**
   * 获取swiper猎豹
   * @param {*} data
   */
  getSwiperList (data) {
    return super.get('getSwiperList', data)
  }

  /**
   * 获取精选文章列表
   * @param {*} data
   */
  getGoodArticleList (data) {
    return super.get('getGoodArticleList', data)
  }

  /**
   * 获取数码文章列表
   * @param {*} data
   */
  getDigitArticleList (data) {
    return super.get('getDigitArticleList', data)
  }
}
