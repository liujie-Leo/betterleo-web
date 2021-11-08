import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import status from './module/status'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    status
  }
})
