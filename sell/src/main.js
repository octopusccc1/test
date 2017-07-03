// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './common/stylus/index.styl'
Vue.use(VueRouter)
Vue.use(VueResource)
// 定义模版
import Goods from './components/goods/goods.vue'
import Ratings from './components/ratings/ratings.vue'
import Seller from './components/seller/seller.vue'
/* eslint-disable no-new */
// 配置路由
var routes = [
{path: '/goods', component: Goods},
{path: '/ratings', component: Ratings},
{path: '/seller', component: Seller},
{path: '/*', redirect: '/goods'}
]
// 获取路由实例
var router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
// 挂载路由
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
