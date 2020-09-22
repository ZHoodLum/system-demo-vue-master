<template>
  <el-container style="height: 100%;">
    <!--左侧菜单栏样式-->
    <el-aside width="15%">
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%;"
               :default-active="$route.path"
               :router="true"
               @open="handleOpen"
               @close="handleClose"
               :defaultSelectedKeys="items">

        <el-menu-item @click.native="logout">
          <i class="el-icon-menu"></i><span slot="title">mini管理平台</span>
        </el-menu-item>
        <!--递归组件 实现动态菜单样式-->
        <reMenu :data="menuData"></reMenu>
      </el-menu>
    </el-aside>

    <!--界面头样式-->
    <el-container>
      <el-header style=" background-color:#545c64;height: 13.1vh">
        <div class="userInfo">
          <el-dropdown trigger="hover">
            <span class="userInfo-inner">
              <div>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled style="font-family: 'Microsoft YaHei';font-size: 5vh;color: black">孙桑
              </el-dropdown-item>
              <el-dropdown-item divided @click.native="personalCenter">个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!--界面内容展示-->
      <!--内容主题-->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
  import reMenu from '../../components/reMenu.vue'

  export default {
    name: 'home',
    props: ['items'], // 接收父组件传的值，
    components: {
      reMenu: reMenu
    },
    data () {
      return {
        loginUrl: '/',
        menuData: [
          {
            id: 0,
            url: 'promiseManage',
            icon: 'el-icon-message',
            alias: '权限管理2',
          },
          {
            //一级
            id: 1,
            url: 'systemManage',
            icon: 'el-icon-message',
            alias: '两级菜单',
            //二级
            childs: [
              {
                id: 3,
                url: 'promiseManage',
                icon: 'el-icon-loading',
                alias: '权限管理3',
                value: {path: '/promiseManage'}
              },
              {
                id: 4,
                url: 'roleManage',
                icon: 'el-icon-bell',
                alias: '角色管理',
                value: '/system/role'
              },
              {
                id: 2,
                url: 'menuManage',
                icon: 'el-icon-edit',
                alias: '菜单管理',
                value: '/system/menu'
              },
              {
                id: 5,
                url: 'groupManage',
                icon: 'el-icon-mobile-phone\r\n',
                alias: '分组管理',
                value: '/system/group'
              }
            ]
          },
          {
            //一级
            id: 6,
            url: 'userManage',
            icon: 'el-icon-news',
            alias: '三级菜单',
            //二级
            childs: [
              {
                id: 7,
                url: 'accountManage',
                icon: 'el-icon-phone-outline\r\n',
                alias: '帐号管理',
                value: '',
                //三级
                childs: [
                  {
                    id: 14,
                    url: 'emailManage',
                    icon: 'el-icon-sold-out\r\n',
                    alias: '邮箱管理',
                    value: '/content/email'
                  },
                  {
                    id: 13,
                    url: 'passManage',
                    icon: 'el-icon-service\r\n',
                    alias: '密码管理',
                    value: '/content/pass'
                  }
                ]
              },
              {
                id: 8,
                url: 'integralManage',
                icon: 'el-icon-picture',
                alias: '积分管理',

                value: '/user/integral'
              }
            ]
          },
          {
            //一级
            id: 401,

            url: 'contentManage',
            icon: 'el-icon-rank',
            alias: '四级菜单',
            //er级
            childs: [
              {
                id: 41,
                url: 'classifyManage2',
                icon: 'el-icon-printer',
                alias: '分类管理',
                //三级
                childs: [
                  {
                    id: 42,
                    url: 'classifyManage3',
                    icon: 'el-icon-printer',
                    alias: '分类管理',
                    //四级
                    childs: [
                      {
                        id: 43,
                        url: 'classifyManage4',
                        icon: 'el-icon-printer',
                        alias: '分类管理',
                        value: '/content/classify'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            //一级
            id: 402,
            url: 'contentManage',
            icon: 'el-icon-rank',
            alias: '四级菜单',
            //er级
            childs: [
              {
                id: 41,
                url: 'classifyManage2',
                icon: 'el-icon-printer',
                alias: '分类管理',
                //三级
                childs: [
                  {
                    id: 42,
                    url: 'classifyManage3',
                    icon: 'el-icon-printer',
                    alias: '分类管理',
                    //四级
                    childs: [
                      {
                        id: 43,
                        url: 'classifyManage4',
                        icon: 'el-icon-printer',
                        alias: '分类管理',
                        value: '/content/classify'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            //一级
            id: 403,

            url: 'contentManage',
            icon: 'el-icon-rank',
            alias: '四级菜单',
            //er级
            childs: [
              {
                id: 41,
                url: 'classifyManage2',
                icon: 'el-icon-printer',
                alias: '分类管理',
                //三级
                childs: [
                  {
                    id: 42,
                    url: 'classifyManage3',
                    icon: 'el-icon-printer',
                    alias: '分类管理',
                    //四级
                    childs: [
                      {
                        id: 43,
                        url: 'classifyManage4',
                        icon: 'el-icon-printer',
                        alias: '分类管理',
                        value: '/content/classify'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less" scoped>
  .userInfo {
    height: 6vh;
    text-align: center;
    padding: 2vh 5vh 0 0;
    float: right;
    width: 12vh;
  }

  .userInfo-inner {
    font-size: 10px;
    cursor: pointer;
    color: #fff;
  }

</style>
