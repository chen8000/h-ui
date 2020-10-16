<!--
 * @Date: 2020-07-29 16:32:05
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-16 15:01:49
--> 
<template>
  <div class="h--select" :style="{'height': height}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'h-select',
    props: {
      height: {
        type: String,
        default: '30px'
      }
    },
    mounted(){
      document.getElementsByTagName('body')[0].setAttribute('h-select', 'style')
    }
  }
</script>
<style lang="scss">
@import '@p/assets/theme';
body[h-select="style"] .el-select-dropdown__item.selected {
    color: $c-primary;
}
body[h-select="style"] .el-select-dropdown__item.hover, 
body[h-select="style"] .el-select-dropdown__item:hover{
  background-color: rgba($c-primary, .05);
}
</style>
<style lang="scss" scoped>
@import '@p/assets/theme';
@import './index.scss';
</style>