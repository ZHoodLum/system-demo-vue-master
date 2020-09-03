import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/components/login/login.vue');
const homeIndex = () => import('@/components/home/index.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      component: homeIndex,
      name: '',
      hidden: true
    }
  ]
})
