<template>
  <div>
    <h2>时间</h2>
    {{new Date().toLocaleString()}}----------{{ date | forDate }}
  </div>

</template>
<script>
  export default {
    data() {
      return {
        date: new Date(),
      }
    },
    mounted () {
      let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.date = new Date(); // 修改数据date
      }, 1000)
    },
    methods: {

    },
    beforeDestroy () {
      if (this.timer) {
        clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
      }
    }

  }
</script>
