<!--
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 15:18:40
--> 
<template>
  <button ref="hButton" :class="[
    'h--button', 
    `${type ? `h--button--${type}` : ''}`
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
    },
    mounted(){
      this.$nextTick(() => {
        // console.log(ripplesColor.theme1[this.type])
        ripples({
          object: this.$refs.hButton, 
          color: ripplesColor.theme1[this.type]
        })
      })
    },
    methods: {
      handleRipples(){
        // console.log(event.toElement.parentElement)
      }
    }
  }
</script>

<style lang="scss">
  @import '@/config/theme/common';
</style>
<style lang="scss" scoped>
  @import '@/config/theme';
  @import './index.scss';
</style>