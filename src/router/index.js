import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//多次点击跳转同一个路由是不被允许的,j解决方案
//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

//用户
const login = () => import('../views/users/login.vue')
const promiseManage = () => import('../views/users/promiseManage.vue')
const welcomeUsers = () => import('../views/users/welcomeUsers.vue')
const welcomeUsers2 = () => import('../views/users/welcomeUsers2.vue')

//主页
const homeIndex = () => import('../views/home/index.vue')

export default new VueRouter({
  routes: [
    {
      name: 'login', path: '/', component: login
    },
    {
      name: 'main',
      path: '/main',
      component: homeIndex,
      //左侧菜单下的组件全部属于
      children: [
        //首页
        {
          name:'welcomeUsers',
          path: '/welcomeUsers',
          component: welcomeUsers
        },
        //权限管理
        {
          name:'promiseManage',
          path: '/promiseManage',
          component: promiseManage
        },
        //二级菜单
        {
          name: 'systemManage',
          path: '/systemManage',
          children: [
            {
              name:'welcomeUsers2',
              path: '/welcomeUsers2',
              component: welcomeUsers2
            }
          ]
        }

      ]
    }
  ]
})
