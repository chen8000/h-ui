<!--
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 19:03:22
--> 
<template>
  <button :class="[
    'h--button h--ripple', 
    `${type ? `h--button--${type}` : ''}`
  ]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { ripple } from '../../../plugin/ripple'
  export default {
    name: 'h-button',
    props: {
      type: String,
    },
    mounted(){
      ripple('h--button--default', '#2f5398')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../theme';
  @import './index.scss';
</style>