import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
//elementui组件库
import elementUI from 'element-ui'
//element样式
import 'element-ui/lib/theme-chalk/index.css'
//element-tree树形表格
import elementUITreeGrid from 'element-tree-grid'
//屏幕自适应PC端
import 'lib-flexible'
//引入图标组件库
import './icons'


//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 使用element组件
Vue.use(elementUI)
Vue.component(elementUITreeGrid.name,elementUITreeGrid)

//全局引用CSS
import './assets/css/index.scss'


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
