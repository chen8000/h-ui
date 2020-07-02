
/*
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 10:54:24
 */ 
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
/**
 * 按需引入
 * import './anxu' 
 */

/**
 * 导入组件库
 * import HUI from '../packages'
 * Vue.use(HUI)
 */
import HUI from '../packages'
Vue.use(HUI)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
