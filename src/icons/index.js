import Vue from 'vue'
// 引入svg组件
import SvgIcon from '@/components/SvgIcon'
//注册组件SvgIcon
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
