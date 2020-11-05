<template>
  <div>
    <el-row>
      <h2>时间1</h2>
      {{date.toLocaleString()}}
    </el-row>

    <el-row>
      <h2>年</h2>
      {{date.getFullYear()}}
    </el-row>

    <span>------------------------------------------------</span>
    <el-row>
      <h2>时间1</h2>
      {{dates.toLocaleString()}}
    </el-row>

    <el-row>
      <h2>年</h2>
      {{dates.getFullYear()}}
    </el-row>

    <el-row>
      <h2>年</h2>
      {{(dates.getMonth() + 1) < 10 ? '0' + (dates.getMonth() + 1) : (dates.getMonth() + 1)}}
    </el-row>


  </div>

</template>
<script>
  import {getTime, formatDates} from '@/utils/date'

  export default {
    data () {
      return {
        date: new Date(),
      }
    },
    mounted () {
      let _this = this // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.date = new Date() // 修改数据date
      }, 1000)
    },
    created () {
      this.test()

    },
    methods: {
      test () {
        let date = this.dates

        let result = formatDates(date)
        console.log('传值时间' + date)//你会打印出来 类似 Thu Jul 06 2019 00:00:00 GMT+0800 (中国标准时间)
        console.log(result)  // 你会打印出来 2019-06-06
      }
      ,
      //处理时间 将时间进行划分
      formatDate (date) {
        //年 2020
        let format_year = date.getFullYear()
        //月 当月份小于10的时候，前面拼接0   eg：8月 -----> 09  后面的格式化时间同理
        let format_month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
        //日 03
        let format_date = date.getDate() ? '0' + date.getDate() : date.getDate()
        //小时
        let format_hours = date.getHours() ? '0' + date.getHours() : date.getHours()
        //分钟
        let format_minutes = date.getMinutes() ? '0' + date.getMinutes() : date.getMinutes()
        //秒
        let format_seconds = date.getSeconds() ? '0' + date.getSeconds() : date.getSeconds()
        //毫秒
        let format_milliseconds = date.getMilliseconds()() ? '0' + date.getMilliseconds()() : date.getMilliseconds()()

        let formatDataTime = {
          'y': format_year,
          'm': format_month,
          'd': format_date,
          'H': format_hours,
          'M': format_minutes,
          'S': format_seconds,
          'MS': format_milliseconds,
        }
        return formatDataTime
      }

  },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd ')
      }
    },
    beforeDestroy () {
      if (this.timer) {
        clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
      }
    }

  }
</script>
