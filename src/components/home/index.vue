<template>
  <div>
    <el-container class="mainStyle">
      <!--左侧菜单栏-->
      <el-aside :width="isCollapse ? 'auto' : 'auto'">
        <!--<el-button type="warning" circle @click="updateIsCollapse()"></el-button>-->
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-row>
            <el-col style=" box-sizing: border-box; width: 100%">

              <el-menu-item index="1-1-11" style="box-sizing: border-box; width: 100%;padding-left: 10%">
                <i class="el-icon-menu"></i><span slot="title">首页</span>
              </el-menu-item>

              <template v-for="(item,index) in leftMenuInfo">
                <!--如果有子节点，则开始遍历-->
                <div v-if="item.children != null  && item.children.length > 0">
                  <!--先创建一个菜单按钮-->
                  <el-submenu :index="index+''" style="box-sizing: border-box; width: 100%;">

                    <template slot="title" style="padding-left: 10%">
                      <i class="el-icon-location"></i><span slot="title">{{item.menuName}}</span>
                    </template>

                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>

                    <!--遍历该节点下的子节点  children-->
                    <template v-for="(child,index)  in item.children">
                      <el-menu-item>
                        <el-menu-item :index="index+''">{{child.menuName}}</el-menu-item>
                      </el-menu-item>
                    </template>

                  </el-submenu>
                </div>
                <!--二级菜单 没有子集的二级菜单-->
                <div v-else>
                  <el-menu-item :index="index+''" style="box-sizing: border-box; width: 100%;padding-left: 10%">
                    <i class="el-icon-setting"></i><span slot="title">{{item.menuName}}</span>
                  </el-menu-item>
                </div>
              </template>

            </el-col>
          </el-row>
        </el-menu>
      </el-aside>
      <!--右侧部分-->
      <el-container>

        <el-header style=" height: 6.3%">

          <!--<el-radio-group v-model="isCollapse">-->
          <!--<el-radio-button :label="false">展开</el-radio-button>-->
          <!--<el-radio-button :label="true">收起</el-radio-button>-->
          <!--</el-radio-group>-->
        </el-header>

        <el-main>Main</el-main>
        <el-footer style=" height: 6.3%">Footer</el-footer>

      </el-container>
    </el-container>

  </div>


</template>
<script>
  export default {
    data () {
      return {
        //左侧菜单是否展开
        isCollapse: false,
        leftMenuInfo: [
          {
            id: 1,
            menuName: '导航菜单1',
            children: [
              {
                id: 11,
                menuName: '导航菜单11',
              },
              {
                id: 12,
                menuName: '导航菜单12',
              }
              ,
              {
                id: 13,
                menuName: '导航菜单13',
              }
              ,
              {
                id: 14,
                menuName: '导航菜单14',
              }
            ]
          },
          {
            id: 2,
            menuName: '导航菜单2',
            children: [
              {
                id: 21,
                menuName: '导航菜单11',
              },
              {
                id: 22,
                menuName: '导航菜单22',
              }
              ,
              {
                id: 23,
                menuName: '导航菜单23',
              }
              ,
              {
                id: 24,
                menuName: '导航菜单24',
              }
            ]
          },
          {
            id: 3,
            menuName: '导航菜单3',
            children: {}
          },
          {
            id: 4,
            menuName: '导航菜单4',
            children: {}
          },
          {
            id: 5,
            menuName: '导航菜单5',
            children: [
              {
                id: 51,
                menuName: '导航菜单51',
              },
              {
                id: 52,
                menuName: '导航菜单52',
              }
              ,
              {
                id: 53,
                menuName: '导航菜单53',
              }
              ,
              {
                id: 54,
                menuName: '导航菜单54',
              }
            ]
          }
        ]
      }
    },
    created () {

    },
    mounted () {

    },
    methods: {
      updateIsCollapse () {
        console.log('调用')
        let _this = this.isCollapse
        console.log(_this)

        if (_this) {
          this.isCollapse = false
        } else {
          this.isCollapse = true
        }
      },
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    box-sizing: border-box;
    width: 80px;
    height: 100%;
    min-height: auto;
    padding-bottom: 100px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
