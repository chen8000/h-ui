/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:45:46
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 16:04:39
 */ 
import HButton from './components/Button'
import HTable from './components/Table'
import HPagination from './components/Pagination'
import HAudio from './components/Audio'
import HInput from './components/Input'

// 组件列表
const components = [
  HButton,
  HTable,
  HPagination,
  HAudio,
  HInput
]

// 定义install 方法，接收 Vue 作为参数，如果使用 use 注册插件，那么所有组件都会被注册
const install = function (Vue) {
  if (install.installed) return

  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))

}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
