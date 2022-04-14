'use strict'
const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    //当前项目IP地址  http://127.0.0.1:8080
    host: 'localhost',
    // 本地和局域网
    // host: '0.0.0.0',
    // 访问的端口
    port: 8087,
    // 配置自动启动浏览器
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    //Source Maps
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,//Source Maps
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
