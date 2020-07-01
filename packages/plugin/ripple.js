/*
 * @Date: 2020-07-01 17:34:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 18:58:20
 */ 
export const ripple = (cls, color) => {
  var canvas = {},
    centerX = 0,
    centerY = 0,
    // color = '',
    containers = document.getElementsByClassName(cls),
    // containers = el,
    context = {},
    element = {},
    radius = 0,
    // 根据callback生成requestAnimationFrame动画
    requestAnimFrame = function () {
      // return (
      //   window.requestAnimationFrame       || 
      //   window.mozRequestAnimationFrame    || 
      //   window.oRequestAnimationFrame      || 
      //   window.msRequestAnimationFrame     || 
      //   function (callback) {
      //     window.setTimeout(callback, 30);
      //   }
      // );
      return function (callback) {
        window.setTimeout(callback, 0);
      }
    } (),
    // 为每个指定元素生成canves
    init = function () {
      containers = Array.prototype.slice.call(containers);
      for (var i = 0; i < containers.length; i += 1) {
        canvas = document.createElement('canvas');
        canvas.addEventListener('mousedown', press, false);
        canvas.addEventListener('mouseup', up, false)
        containers[i].appendChild(canvas);
        canvas.style.width ='100%';
        canvas.style.height='100%';
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    },
    // 点击并且获取需要的数据，如点击坐标、元素大小、颜色
    press = function (event) {
      // color = event.toElement.parentElement.dataset.color;
      element = event.toElement;
      element.style.opacity = '.25'
      context = element.getContext('2d');
      radius = 0;
      centerX = event.offsetX;
      centerY = event.offsetY;
      context.clearRect(0, 0, element.width, element.height);
      draw();
    },
    up = function () {
      setTimeout(() => {
        element.style.opacity = '0'
      }, 300)
    },
    // 绘制圆形，并且执行动画
    draw = function () {
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      radius += 1.2;
      // 通过判断半径小于元素宽度，不断绘制 radius += 2 的圆形
      if (radius < (element.width + element.width / 4)) {
        requestAnimFrame(draw)
      }
    }
  init();
}