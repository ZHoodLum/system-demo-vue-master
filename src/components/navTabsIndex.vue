<template>
  <el-tabs v-model="activeKey" type="card" closable
           @tab-remove="removeTab"
           @edit="onEdit"
           @tab-click="onChange">

    <el-tab-pane v-for="item in editableTabs" :key="item.key" :name="item.name" :label="item.label">
      <!--展示首页-->
      <welcomeUsers v-if="item.key=='/welcomeUsers'"></welcomeUsers>
      <!--展示其他标签页-->
      <keep-alive v-else>
        <router-view></router-view>
      </keep-alive>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
  //欢迎页
  import welcomeUsers from '../views/users/welcomeUsers.vue'

  export default {
    name: 'navTabsIndex',
    components: {
      welcomeUsers: welcomeUsers
    },
    data () {
      const editableTabs = [{label: '首页', name: '/welcomeUsers', key: '/welcomeUsers'}]
      return {
        //循环标签页导航栏
        editableTabs,
        //标签页首页路由路径
        activeKey: editableTabs[0].key
      }
    },
    methods: {
      onChange (activeKey) {
        this.$router.push(this.activeKey)
      },
      onEdit (targetKey, action) {
        console.log(targetKey)
        this.activeKey = targetKey
        this.$router.push(this.activeKey)
        // this[action](targetKey)
        console.log(this.activeKey)
      },

      //接收父组件（home 或index.vue ）传值
      addTab (routerUrl, tabName) {
        console.log('子组件navTabsIndex______当前组件是：' + routerUrl + '||________||上一个组件是：' + this.activeKey)
        const editableTabs = this.editableTabs
        //路由地址
        const activeKey = routerUrl
        // 是否存在此tab 0 不存在 1存在
        let isSave = false
        editableTabs.map((item, index) => {
          //如果当前标签存在，路由地址是唯一的，所以通过URL进行判定
          if (item.key == activeKey) {
            isSave = true
          }
        })
        // console.log('是否为当前页----' + isSave)
        if (isSave == true) {
          this.activeKey = activeKey
          this.$router.push({
            path: activeKey,
            query: {id: activeKey}
          })
        } else {
          this.editableTabs.push({
            label: tabName,
            name: activeKey,
            key: activeKey
          })
          this.editableTabs = editableTabs
          this.activeKey = activeKey
          this.$router.push(activeKey)
        }
      },

      //移除标签页
      removeTab (targetName) {
        let tabs = this.editableTabs
        let activeName = this.activeKey
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.activeKey = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
        //通过路由跳转到：
        this.$router.push({path: activeName})
        console.log('通过路由跳转到：' + activeName)
      }
    }
  }
</script>

<style scoped>

</style>
