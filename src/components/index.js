// 自动注册全局组件

import Vue from 'vue'
const path = require('path')

const componentsContext = require.context('./content', false, /\.vue$/)
const componentsLayout = require.context('./layout', false, /\.vue$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig
  // 兼容组件没有name的情况
  if (!ctrl.name) ctrl.name = path.basename(component, '.vue')
  Vue.component(ctrl.name, ctrl)
})

componentsLayout.keys().forEach(component => {
  const componentConfig = componentsLayout(component)
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig
  // 兼容组件没有name的情况
  if (!ctrl.name) ctrl.name = path.basename(component, '.vue')
  Vue.component(ctrl.name, ctrl)
})
