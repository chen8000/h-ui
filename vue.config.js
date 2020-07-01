/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:42:19
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 17:03:36
 */ 
module.exports = {
  pages: {
    index: {
      entry: 'test/main.js',
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