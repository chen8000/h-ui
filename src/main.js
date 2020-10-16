/*
 * @Date: 2020-07-03 17:44:20
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-16 14:59:05
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './route'
import HUI from '../packages'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css' 
import 'element-ui/lib/theme-chalk/index.css'
// import 'h-uiii/h-ui.css'
import './assets/fonts/iconfont.css'
import PageLayout from './views/layout/components/pageLayout/index.vue'
import DocParams from './views/layout/components/docParams/index.vue'
import {
  Collapse,
  CollapseItem,
  Table,
  TableColumn,
  Slider,
  Pagination,
  Select,
  Option
} from 'element-ui';

// 全局注册组件
Vue.component(PageLayout.name, PageLayout)
Vue.component(DocParams.name, DocParams)
Vue.use(HUI)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Slider)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)


// 自定义指令
Vue.directive('highlight',function (el) {
  // hljs.configure({useBR: true});
  let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
