import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//用户
const login = () => import('@/views/users/login.vue');
const promiseManage = () => import('@/views/users/promiseManage.vue');

//主页
const homeIndex = () => import('@/views/home/index.vue');



export default new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/',
      component: login
    },
    {
      name: 'home',
      path: '/home',
      component: homeIndex,
      children: [
        {
          name:'promiseManage',
          path: '/promiseManage',
          component: promiseManage
        }
        ]
    }
  ]
})
