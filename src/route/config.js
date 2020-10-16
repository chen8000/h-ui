/*
 * @Date: 2020-07-05 14:53:24
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-31 17:11:58
 */ 
const routes = [
  {
    path: '*',
    redirect: '/button'
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/components/Button')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/components/Table')
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('@/views/components/Audio')
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('@/views/components/Pagination')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('@/views/components/Input')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('@/views/components/Select')
  },
  {
    path: '/formitem',
    name: 'formitem',
    component: () => import('@/views/components/FormItem')
  },
  {
    path: '/pcclink',
    name: 'pcclink',
    component: () => import('@/views/components/PccLink')
  },
  {
    path: '/pccjson',
    name: 'pccjson',
    component: () => import('@/views/components/PccJson')
  }
]
export default routes