/*
 * @Date: 2020-07-29 16:31:56
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:39:06
 */ 
import HSelect from './src'

HSelect.install = function (Vue) {
  Vue.component(HSelect.name, HSelect)
}

export default HSelect