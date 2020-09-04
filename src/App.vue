<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  /* 无需开启 平铺整个屏幕*/
  /*html,body,#app{*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*!*page*!*/
    /*position:absolute;*/
    /*top: 0;*/
    /*bottom:0;*/
    /*left:0;*/
    /*right:0;*/
    /*margin-top:0px;*/
    /*margin-left:0px;*/
    /*margin-right:0px;*/
    /*margin-bottom:0px;*/
  /*}*/
  /*是否有滚动条*/
  /*::-webkit-scrollbar {*/
    /*width: 0 !important;*/
  /*}*/

  /*::-webkit-scrollbar {*/
    /*width: 0 !important;*/
    /*height: 0;*/
  /*}*/
</style>
