import Vue from 'vue'
import App from './App'
import router from './router'

import "babel-polyfill"

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//屏幕自适应PC端
import 'lib-flexible'

//引入图标组件库
// import './icons'

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 使用element组件
Vue.use(elementUI)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
