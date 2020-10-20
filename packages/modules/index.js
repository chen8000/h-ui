/*
 * @Date: 2020-07-02 15:16:53
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-20 17:21:39
 */ 
import { getCoordinate, addClass } from '@t'
/**
 * @name: ripples
 * @msg: 点击涟漪效果
 * @param {type} Object
 */
export const ripples = ({object, color}) => {
  object.addEventListener('mousedown', function(event) {
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
      span.style.transition = `all .3s linear`
      span.style.transform = `scale(${scalMultiple * 2})`
      span.style.opacity = 0

      setTimeout(() => {
        this.removeChild(span)
      },300)
  }, !1)
}