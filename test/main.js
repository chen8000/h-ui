
/*
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 15:46:11
 */ 
import Vue from 'vue'
import App from './App.vue'

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
