export default [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@/views/main/Home.vue'], resolve),
    meta: {
      keepAlive: false,
      title: 'BetterLeo'
    }
  },
  {
    path: '/write',
    name: 'write',
    component: resolve => require(['@/views/main/write.vue'], resolve),
    meta: {
      title: 'BetterLeo-创作'
    }
  },
  {
    path: '/articleListDevelop',
    name: 'articleListDevelop',
    component: resolve =>
      require(['@/views/main/articleListDevelop.vue'], resolve),
    meta: {
      title: 'BetterLeo'
    }
  },
  {
    path: '/articleListDigit',
    name: 'articleListDigit',
    component: resolve =>
      require(['@/views/main/articleListDigit.vue'], resolve),
    meta: {
      title: 'BetterLeo'
    }
  },
  {
    path: '/articleListLiving',
    name: 'articleListLiving',
    component: resolve =>
      require(['@/views/main/articleListLiving.vue'], resolve),
    meta: {
      title: 'BetterLeo'
    }
  },
  {
    path: '/PersonalCenter/myPage',
    name: 'myPage',
    component: resolve =>
      require(['@/views/main/PersonalCenter/myPage.vue'], resolve),
    meta: {
      title: 'BetterLeo-主页'
    }
  },
  {
    path: '/PersonalCenter/edit',
    name: 'edit',
    component: resolve => require(['@/views/main/PersonalCenter/edit.vue'], resolve),
    meta: {
      title: 'BetterLeo-编辑个人信息'
    }
  },
  {
    path: '/article',
    name: 'article',
    component: resolve => require(['@/views/main/article.vue'], resolve),
    meta: {
      title: 'BetterLeo'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['@/views/main/search.vue'], resolve),
    meta: {
      title: 'BetterLeo'
    }
  }
]
