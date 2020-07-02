<!--
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 16:58:47
--> 
<template>
  <button @click="handleDis" :disabled="disabled" ref="hButton" :class="[
    'h--button', 
    `${type ? `h--button--${type}` : ''}`,
    `${hollow ? `h--button--${type}--hollow` : ''}`,
    `${disabled ? `h--button--disabled` : ''}`
  ]">
    <span>
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
          color: !ripplesColor.theme1[this.type] ? 
                  ripplesColor.theme1['default'] : 
                  ripplesColor.theme1[this.type]
        })
      },
      handleDis () {
        console.log(111)
      }
    }
  }
</script>

<style lang="scss">
  @import '@/config/theme/common';
</style>
<style lang="scss" scoped>
  @import '@/config/theme';
  @import './_mixin.scss';
  @import './index.scss';
</style>