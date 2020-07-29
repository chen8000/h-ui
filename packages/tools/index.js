/*
 * @Date: 2020-07-02 10:24:25
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:00:11
 */

// import { province } from './pcc/province'
// import { city } from './pcc/city'
// import { county } from './pcc/county'

// // 省市区
// export const pcc = {
//   province,
//   city,
//   county
// }
 
/**
 * @name: coordinate
 * @msg: 获取元素left top 间距， 元素内鼠标的xy点
 * @param {type} Object
 * @return: <Number> top, left, pageX, pageY
 */
export const getCoordinate = ({event, target}) => {
  let position = {
      top: 0,
      left: 0
    }, 
  ele = document.documentElement;
  'undefined' != typeof target.getBoundingClientRect && 
  (position = target.getBoundingClientRect())

  let top = position.top + window.pageYOffset - ele.clientTop
  let left = position.left + window.pageXOffset - ele.clientLeft
  let pageX = event.pageX - left
  let pageY = event.pageY - top
  return { top, left, pageX, pageY }
}


// 检查
export const hasClass = (elem, cls) =>{
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0) return false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

// 增加    
export const addClass = (elem, cls) => {
  if (!hasClass(elem, cls)) {
      elem.className = elem.className === '' ? cls : elem.className + ' ' + cls
  }
}

// 删除    
export const removeClass = (elem, cls) =>{
  if (hasClass(elem, cls)) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
          newClass = newClass.replace(' ' + cls + ' ', ' ')
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

/**
 * @name: transTime
 * @msg: 格式化分钟数： 把秒转为 00:00
 * @param {type} Number
 * @return: String  --> 00:00
 */
export const transTime = t => {
  let d = parseInt(t)
  let m = parseInt(d/60)
  let sec = d % 60 + ''
  let isM0 = ':'
  if (m == 0) {
      m = '00'
  } else if (m < 10 ) {
      m = '0'+m
  }
  if (sec.length == 1) {
      sec = '0' + sec
  }
  return m + isM0 + sec
}