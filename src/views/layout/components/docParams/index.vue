<!--
 * @Date: 2020-07-07 18:23:13
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 18:58:15
--> 
<template>
  <div class="parameter">
    <p v-if="title" class="title">{{title}}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'doc-params',
    props: {
      // 标题
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style';
  .title {
    @include paramsTitle;
    margin-top: 30px;
  }
</style>