<!--
 * @Date: 2020-07-28 18:49:36
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 17:39:31
--> 
<template>
  <div :class="['h--form--item',`h--form--item--${layout}`]">
    <div :style="{'width' :labelWidth,'text-align': labelAlign}" 
         :class="[
          'h--form--item--layout',
          `h--form--item--layout--${layout}`]">
      <span :class="required && `h--form--item--required--${required}`">
        {{label}}
      </span>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'h-form-item',
    props: {
      label: {
        type: String,
        default: ''
      },
      // top / left / bottom 默认top
      layout: {
        type: String,
        default: 'top'
      },
      // label-width label的宽度
      labelWidth: {
        type: String,
        default: 'auto'
      },

      // label的对齐方式 left / right   默认left
      labelAlign: {
        type: String,
        default: 'left'
      },

      // 是否带必填标识  left / right 指定必选标识的位置
      required: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@p/assets/theme';
@import './index.scss';
</style>