import './utils/performance' // 性能检测
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
// 按需引入element-ui
import './components/element-ui/index'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'

// 公共样式
import './assets/style/index.styl'

import '@/components'
import Http from '@/api/http'

// markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// message组件单独安装
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message)

Vue.config.productionTip = false
// Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(mavonEditor)

Vue.use(MetaInfo)

const http = new Http()
window.http = http
Vue.prototype.http = http
new Vue({
  router,
  store,
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  render: h => h(App),
  errorCaptured (err, vm, info) {
    console.log('Error:error had been captured by errorCaptured hook:')
    console.log(err)
    console.log(vm)
    console.log(info)
  }
}).$mount('#app')
