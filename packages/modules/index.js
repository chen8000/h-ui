/*
 * @Date: 2020-07-02 15:16:53
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-03 12:12:02
 */ 
import { getCoordinate, addClass } from '@/tools'
/**
 * @name: ripples
 * @msg: 点击涟漪效果
 * @param {type} Object
 */
export const ripples = ({object, color}) => {
  object.addEventListener('mousedown', function(event) {
    addClass(this, 'h--ripples--parent')
    let span = document.createElement('span')
    span.className = 'h--ripples'
    this.appendChild(span)
    // 坐标点
    let { pageX, pageY } = getCoordinate({ event, target: this })
    // span 的宽高
    let w = this.offsetWidth + 20
    let h = this.offsetHeight + 20
    let scalMultiple = w > h ? w : h
    span.style.left = `${pageX}px`
    span.style.top = `${pageY}px`
    span.style.background = color
    span.style.transition = `all .4s linear`
    span.style.transform = `scale(${scalMultiple})`
    span.style.opacity = 0

    setTimeout(() => {
      this.removeChild(span)
    },400)
  }, !1)
}

/**
 * @name: getThemeName
 * @msg: 获取主题name
 * @param {type} 
 * @return: 
 */
export const getThemeName = () => {
  return document.getElementById('app').getAttribute('theme')
}