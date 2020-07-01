/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 15:21:14
 */ 
import YplButton from './src'

YplButton.install = function (Vue) {
  Vue.component(YplButton.name, YplButton)
}

export default YplButton