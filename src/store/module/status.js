import { setLocalStorage } from '@/utils/localStorage'

const state = {
  darkModel: false
}

const mutations = {
  TOGGLE_DARKMODEL (state) {
    state.darkModel = !state.darkModel
    setLocalStorage('darkModel', state.darkModel)
  },
  SET_DARKMODEL (state, value) {
    state.darkModel = value
  }
}

export default {
  state,
  mutations
}
