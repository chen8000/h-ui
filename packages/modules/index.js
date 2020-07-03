/*
 * @Date: 2020-07-02 15:16:53
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-03 14:10:20
 */ 
import { getCoordinate, addClass } from '@/tools'
/**
 * @name: ripples
 * @msg: 点击涟漪效果
 * @param {type} Object
 */
export const ripples = ({object, color}) => {
  object.addEventListener('mousedown', function(event) {
    // let interval = null
    // let count = 0
    // interval = setInterval(() => {
    //   count ++
    //   count === 1 && clearInterval(interval)
      addClass(this, 'h--ripples--parent')
      let span = document.createElement('span')
      addClass(span, 'h--ripples')
      this.appendChild(span)
      // 坐标点
      let { pageX, pageY } = getCoordinate({ event, target: this })
      // span 的宽高

      let w = this.offsetWidth
      let h = this.offsetHeight
      let inaccWH = w > h ? w : h
      let inaccXY = pageX > pageY ? pageX : pageY
      let radius = inaccWH - inaccXY
      let scalMultiple = radius > inaccXY ? radius : inaccXY
      
      span.style.left = `${pageX}px`
      span.style.top = `${pageY}px`
      span.style.background = color
      span.style.transition = `all 1s linear`
      span.style.transform = `scale(${scalMultiple * 2})`
      span.style.opacity = 0

      setTimeout(() => {
        this.removeChild(span)
      },1000)
    // }, 100)
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