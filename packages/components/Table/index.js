/*
 * @Date: 2020-07-07 14:35:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 14:39:04
 */ 
import HTable from './src'

HTable.install = function (Vue) {
  Vue.component(HTable.name, HTable)
}

export default HTable