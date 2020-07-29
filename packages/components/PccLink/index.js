/*
 * @Date: 2020-07-29 15:21:06
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 15:25:42
 */ 
import HPccLink from './src'

HPccLink.install = function (Vue) {
  Vue.component(HPccLink.name, HPccLink)
}

export default HPccLink