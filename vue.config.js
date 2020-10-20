/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:42:19
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-20 15:40:40
 */ 
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  outputDir: '../huiii.github.io', // 编译后静态目录的位置
  runtimeCompiler: true,
  chainWebpack: config => {
      config.resolve.alias
          .set('@p', resolve('packages'))
          .set('@', resolve('src'))
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //       .add('/packages')
  //       .end()
  //     .use('babel')
  //       .loader('babel-loader')
  // }
}