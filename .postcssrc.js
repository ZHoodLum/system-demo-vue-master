// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    'autoprefixer': {},
    //自适应PC端分辨率
    // 若要管理第三方插件库 防止第三方组件变小或者变大 还需要再package.json中进行配置 postcss
    //remUnit 选项意思是 1rem=多少像素
    'postcss-px2rem-exclude': {
      remUnit: 70,
      exclude: /node_modules|folder_name/i

    }
  }
}
