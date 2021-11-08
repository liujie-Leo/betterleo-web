const state = {
  userInfo: {},
  accessToken: ''
}
const mutations = {
  SAVE_USER (state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR_USER (state) {
    state.userInfo = {}
  }
}
const actions = {

}
export default {
  state,
  mutations,
  actions
}
