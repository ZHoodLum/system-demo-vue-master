<template>
  <div>
    <template v-for="reMenu in data">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="!reMenu.childs&&reMenu" :key="reMenu.id" :data="reMenu" :index="reMenu.url"
                    @click="reMenuAddTabs(reMenu.url,reMenu.alias)">
        <i :class="reMenu.icon"></i>
        <span slot="title">{{reMenu.alias}}</span>
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="reMenu.childs&&reMenu" :key="reMenu.id" :data="reMenu" :index="reMenu.url" @click="reMenuAddTabs(reMenu.url,reMenu.alias)">
        <template slot="title">
          <i :class="reMenu.icon"></i>
          <span>{{reMenu.alias}}</span>
        </template>
        <!-- 递归 -->
        <reMenu :data="reMenu.childs" ></reMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  import Bus from '../assets/js/commonBus.js';

  export default {
    name: 'reMenu',
    props: ['data'],
    data () {
      return {}
    },
    methods: {
      reMenuAddTabs(routerUrl, tabName) {
        var  resInfo = {
          'routerUrl': routerUrl,
          'tabName': tabName
        }
        // console.log('子组件reMenu-----' + routerUrl, tabName)
        //子组件 reMenu  向父组件（home 或 index.vue）传值
        // this.$emit('reMenuAddTabs',routerUrl, tabName)
        //使用BUS作为中间件，作为祖孙之间的数据传递
        Bus.$emit('reMenuAddTabs',resInfo)
      }
    }
  }
</script>
<style>
</style>
