<template>
  <div class="reMenu">

    <template v-for="reMenu in data">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="!reMenu.childs&&reMenu" :key="reMenu.id" :data="reMenu" :index="reMenu.url">
        <i :class="reMenu.icon"></i>
        <span slot="title">{{reMenu.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="reMenu.childs&&reMenu" :key="reMenu.id" :data="reMenu" :index="reMenu.url">

        <template slot="title">
          <i :class="reMenu.icon"></i>
          <span> {{reMenu.alias}}</span>
        </template>
        <!-- 递归 -->
        <reMenu :data="reMenu.childs"></reMenu>
      </el-submenu>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'reMenu',
    props: ['data'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
