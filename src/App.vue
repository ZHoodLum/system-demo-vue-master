<template>
  <div id="app" class="mainStyle">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app {
    /*border: 1px solid red;*/
    height: 99vh;
    margin: 0 auto;
    padding: 0 auto;
    /*绝对定位*/
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  /*是否有滚动条*/
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }

</style>
