/*
 * @Date: 2020-07-02 15:16:53
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 19:02:58
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
    span.style.transition = `all .3s linear`
    span.style.transform = `scale(${scalMultiple + scalMultiple})`
    setTimeout(() => {
      addClass(span, 'h--isRemove')
    }, 300)

  }, !1)
  // 鼠标抬起
  object.addEventListener('mouseup', function(){
    setTimeout(() => {
      // 获取动画已经执行完成的dom 并remove
      let isR = this.getElementsByClassName('h--isRemove')
      for(let i = 0; i<isR.length;i++) {
        isR[i].style.opacity = 0
        setTimeout(() => {
          isR[i] && this.removeChild(isR[i])
        }, 400)
      }
    }, 310)
  })
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