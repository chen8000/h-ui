/*
 * @Date: 2020-07-08 16:32:10
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 16:32:49
 */ 
import HPagination from './src'

HPagination.install = function (Vue) {
  Vue.component(HPagination.name, HPagination)
}

export default HPagination