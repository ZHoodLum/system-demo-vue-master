import Vue from 'vue'
import App from './App'
import router from './router'

import "babel-polyfill"

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 使用element组件
Vue.use(elementUI)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
