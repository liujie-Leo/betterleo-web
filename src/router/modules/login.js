export default [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/Login/login.vue'], resolve),
    meta: {
      title: 'BetterLeo-登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['@/views/Login/register.vue'], resolve),
    meta: {
      title: 'BetterLeo-注册'
    }
  }
]
