/*
 * @Date: 2020-07-02 10:24:25
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 15:18:12
 */
 
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