<template>
  <el-container style="height: 100%;" class="mainStyle">
    <!--左侧菜单栏样式-->
    <!--<el-aside width=30vh  :width="isCollapse ? 'auto' : 'auto'">-->
    <el-aside :width="isCollapse ? 'auto' : 'auto'">
      <el-menu background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff" active-text-color="#ffd04b"
               :default-active="this.$route.path"
               :router="true"
               @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse"
               :collapse-transition="false"
               style="height: 100%;font-family: 'Microsoft YaHei';font-size: 14vh; width:auto">

        <el-menu-item @click.native="updateIsCollapse()"  v-model="isCollapse">
        <!--<el-menu-item :index='homeIndex'>-->
          <!--<i class="el-icon-menu"></i>-->
          <i class="el-icon-loading"></i>
          <span slot="title">mini管理平台</span>
        </el-menu-item>
        <!--递归组件 实现动态菜单样式 reMenuAddTabs   showChildDeptTitle父组件方法 此处为子组件向父组件传值 -->
        <reMenu :data="menuData" ref="reMenu" v-on:reMenuAddTabs="showChildDeptTitle" ></reMenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!--界面头样式-->
      <el-header height="6.2vh" style=" background-color:rgba(180,180,180,0.53)">
        <div class="userInfo">
          <el-dropdown trigger="hover">
            <svg-icon icon-class="profilePhoto" style="width: 5vh;height: 5vh;"></svg-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled class="userInfo-inner" style="">贺仁贤桑</el-dropdown-item>
              <el-dropdown-item divided @click.native="personalCenter">个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <!--内容主题  界面内容展示-->
      <el-main>
        <!--此处未父组件（home或index.vue）向子组件 navTabsIndex 传值-->
        <navTabsIndex  ref="navTabsIndex"></navTabsIndex>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import reMenu from '../../components/reMenu.vue'
  import navTabsIndex from '../../components/navTabsIndex.vue'
  import Bus from '../../assets/js/commonBus.js';

  export default {
    name: 'home',
    //引用的组件
    components: {
      reMenu: reMenu,
      navTabsIndex: navTabsIndex
    },
    data () {
      return {
        //主页路由位置
        homeIndex: 'main',
        //左侧菜单是否展开
        isCollapse: false,
        menuData: [
          {
            id: 111,
            url: '/welcomeUsers',
            icon: 'el-icon-message',
            alias: '首页',
          },
          {
            id: 22,
            url: '/promiseManage',
            icon: 'el-icon-message',
            alias: '第二个标签页',
          },
          {
            //一级
            id: 1,
            url: '/systemManage',
            icon: 'el-icon-message',
            alias: '两级菜单',
            //二级
            childs: [
              {
                id: 31,
                url: 'welcomeUsers',
                icon: 'el-icon-loading',
                alias: '权限管理3',
              },
              {
                id: 4,
                url: '/welcomeUsers1',
                icon: 'el-icon-bell',
                alias: '角色管理',
                value: '/system/role'
              },
              {
                id: 2,
                url: '/welcomeUsers2',
                icon: 'el-icon-edit',
                alias: '菜单管理',
                value: '/system/menu'
              },
              {
                id: 5,
                url: '/welcomeUsers3',
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
        ],
      }
    },
    mounted() {
      Bus.$on('reMenuAddTabs', resInfo => {
        // console.log('index:------' + resInfo.routerUrl + '-------------' + resInfo.tabName)
        this.$refs.navTabsIndex.addTab(resInfo.routerUrl,resInfo.tabName);
      });
    },
    methods: {
      //是否隐藏左侧菜单
      updateIsCollapse () {
        let _this = this.isCollapse
        // console.log(_this)

        if (_this) {
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
      },
      handleOpen (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        // console.log(key, keyPath)
      },
      //父组件调用子组件方法 navTabsIndex
      showChildDeptTitle(routerUrl, tabName) {
        // console.log('父index]组件' + routerUrl, tabName)
        //父组件向子组件navTabsIndex 传值
        this.$refs.navTabsIndex.addTab(routerUrl,tabName);
      },
    }
  }
</script>

<style lang="less" scoped>
  /*头像DIV自适应*/
  .userInfo {
    /*border: green 1px solid;*/
    /*width: 5vh;*/
    height: 100%;
    text-align: center;
    margin: 2px 7px 1px 0;
    float: right;
  }

  /*头像自适应*/
  .userImg {
    height: 5vh;
    width: 5vh;
  }

  /*头像下拉字体设置*/
  .userInfo-inner {
    font-family: 'Microsoft YaHei';
    font-size: 2vh;
    color: black;
    cursor: pointer;
  }

</style>

<style>
  /*菜单导航折叠后文字不隐藏*/
  /*隐藏文字*/
  .el-menu--collapse .el-submenu__title span {
    display: none;
  }

  /*隐藏 > */
  .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
</style>
