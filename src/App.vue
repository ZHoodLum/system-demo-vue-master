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
     /*text-align: center;*/
    color: #2c3e50;
  }

  /**
  平铺整个屏幕
   */
  html,body,#app{
    height: 100%;
    width: 100%;
    position: page;
    margin-top:0px;
    margin-left:0px;
    margin-right:0px;
    margin-bottom:0px;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
</style>
