<!--
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-03 16:58:05
--> 
<template>
  <button :disabled="disabled" ref="hButton" :class="[
    'h--button', 
    `${type ? `h--button--${type}` : ''}`,
    `${hollow ? `h--button--${type}--hollow` : ''}`,
    `${disabled ? `h--button--disabled` : ''}`,
    `${medium ? 'h--button--medium' : ''}`,
    `${small ? 'h--button--small' : ''}`,
    `${mini ? 'h--button--mini' : ''}`,
    `${long ? 'h--button--long' : ''}`
  ]">
    <span>
      <i v-if="icon" :class="['h--button--icon', icon]"></i>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import { ripples } from '@/modules'
  import { ripplesColor } from '@/config/ripple.config'
  export default {
    name: 'h-button',
    props: {
      // 类型
      type: {
        type: String,
        default: 'default'
      },
      // 空心
      hollow: {
        type: Boolean,
        default: false
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // icon
      icon: {
        type: String
      },
      // 大小 medium / small / mini
      medium: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      mini: {
        type: Boolean,
        default: false
      },
      // 长按钮
      long: {
        type: Boolean,
        default: false
      }
    },
    mounted(){
      this.$nextTick(this.handleRipples)
    },
    methods: {
      handleRipples () {
        // 涟漪效果
        this.type !== 'text' && ripples({
          object: this.$refs.hButton, 
          color: !ripplesColor[this.type] ? 
                  ripplesColor.default : 
                  ripplesColor[this.type]
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '@/config/theme/_common';
</style>
<style lang="scss" scoped>
  @import '@/config/theme';
  @import './_mixin.scss';
  @import './index.scss';
</style>