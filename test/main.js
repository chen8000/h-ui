
/*
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 15:39:31
 */ 
import Vue from 'vue'
import App from './App.vue'

/**
 * 按需引入
 * import './anxu' 
 */

/**
 * 导入组件库
 * import yplUi from '../packages'
 * Vue.use(yplUi)
 */
import YplUI from '../packages'

Vue.use(YplUI)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
