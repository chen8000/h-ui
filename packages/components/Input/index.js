/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 16:04:22
 */ 
import HInput from './src'

HInput.install = function (Vue) {
  Vue.component(HInput.name, HInput)
}

export default HInput