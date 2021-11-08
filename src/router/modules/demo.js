const demoListRoutes = [
  {
    path: '/demos',
    name: 'demo',
    component: resolve => require(['@/views/demo/demo.vue'], resolve),
    meta: {
      title: 'Demos - Leo'
    }
  },
  {
    path: '/demos/music',
    name: 'music',
    component: resolve => require(['@/views/demo/music.vue'], resolve),
    meta: {
      title: 'BetterLeo-Music'
    }
  },
  {
    path: '/demos/about',
    name: 'about',
    component: resolve => require(['@/views/demo/about.vue'], resolve),
    meta: {
      title: '关于BetterLeo'
    }
  },
  {
    path: '/demos/earthDay',
    name: 'earthDay',
    component: resolve => require(['@/views/demo/earthDay.vue'], resolve),
    meta: {
      title: '环境责任-Leo(simulate)'
    }
  },
  {
    path: '/demos/microsoft',
    name: 'microsoft',
    component: resolve => require(['@/views/demo/microsoft.vue'], resolve),
    meta: {
      title: '模仿微软官网响应式(simulate)'
    }
  },
  {
    path: '/demos/responsiveByGrid',
    name: 'responsiveByGrid',
    component: resolve => require(['@/views/demo/responsiveByGrid.vue'], resolve),
    meta: {
      title: '响应式页面'
    }
  }
]

export default demoListRoutes
