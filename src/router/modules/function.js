export default [
  {
    path: '/success',
    name: 'success',
    component: resolve =>
      require(['@/views/functiona/success.vue'], resolve),
    meta: {
      title: 'BetterLeo-success'
    }
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/views/functiona/404.vue'], resolve),
    meta: {
      title: '404'
    }
  }
]
