/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:42:19
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-20 17:20:53
 */ 
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  outputDir: 'docs', // 编译后静态目录的位置
  publicPath: './',
  runtimeCompiler: true,
  chainWebpack: config => {
      config.resolve.alias
          .set('@p', resolve('packages'))
          .set('@t', resolve('tools'))
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