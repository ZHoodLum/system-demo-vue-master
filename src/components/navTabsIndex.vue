<template>
  <el-tabs v-model="activeKey" type="card" @tab-remove="removeTab" closable>
    <el-tab-pane v-for="item in editableTabs"
                 :key="item.key"
                 :name="item.name"
                 :label="item.label"
    >
      <!--展示首页-->
      <welcomeUsers v-if="item.key=='/navTabsIndex'"></welcomeUsers>
      <!--展示其他标签页-->
      <keep-alive v-else>
        <router-view></router-view>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  //欢迎页
  import welcomeUsers from '@/views/users/welcomeUsers.vue'

  export default {
    name: 'navTabsIndex',
    components: {
      welcomeUsers: welcomeUsers
    },
    data () {
      const editableTabs = [{label: '首页', name: '/navTabsIndex', key: '/navTabsIndex'}]
      return {
        //循环标签页导航栏
        editableTabs,
        //标签页首页路由路径
        activeKey: editableTabs[0].key
      }
    },
    methods: {
      onChange (activeKey) {
        this.$router.push(activeKey)
      },
      onEdit (targetKey, action) {
        this[action](targetKey)
        console.log(this.panes)
      },

      //接收父组件（home 或index.vue ）传值
      addTab (routerUrl, tabName) {
        // console.log('子组件navTabsIndex' + routerUrl, tabName + '|||||||v-model的值:' + this.activeKey)
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
      }
    }
  }
</script>

<style scoped>

</style>
