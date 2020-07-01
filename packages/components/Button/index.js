/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 15:45:25
 */ 
import HButton from './src'

HButton.install = function (Vue) {
  Vue.component(HButton.name, HButton)
}

export default HButton