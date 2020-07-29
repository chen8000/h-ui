/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 14:02:18
 */ 
import HFormItem from './src'

HFormItem.install = function (Vue) {
  Vue.component(HFormItem.name, HFormItem)
}

export default HFormItem