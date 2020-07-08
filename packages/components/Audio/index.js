/*
 * @Date: 2020-07-08 18:03:08
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 18:07:40
 */ 
import HAudio from './src'

HAudio.install = function (Vue) {
  Vue.component(HAudio.name, HAudio)
}

export default HAudio