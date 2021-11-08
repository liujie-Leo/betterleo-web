import Vue from 'vue'

// router-modules
import VueRouter from 'vue-router'
import loginRoute from './modules/login'
import mainRoute from './modules/main'
import otherRoute from './modules/function'
import demoRoute from './modules/demo'

// // 获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
// // 修改原型对象中的push方法
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)

const routes = [
  ...mainRoute,
  ...loginRoute,
  ...otherRoute,
  ...demoRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '默认title'
  }
  next()
})
export default router
