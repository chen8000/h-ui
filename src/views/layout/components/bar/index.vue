<!--
 * @Date: 2020-07-03 18:33:25
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 12:12:47
--> 
<template>
  <div class="bar">
    <div v-for="item in bars" :key="item.title" class="bar-item">
      <h5 class="title">{{item.title}}</h5>
      <template v-if="item.child">
        <router-link 
          v-for="child in item.child" 
          :key="child.label" 
          class="label"  
          :to="child.link">{{child.label}}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import { bars } from '@/config/bars.config'
  export default {
    computed: {
      bars: () => bars
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style';
  .bar {
    height: 100%;
    border-right: 1px solid $border;
    padding: 10px 0;
    box-sizing: border-box;
    .bar-item {
      margin-bottom: 20px;
      .title {
        font-size: $small-title-size;
        font-weight: normal;
        color:  $title-color;
        padding-left: 30px;
        margin-bottom: 5px;
      }
      .label {
        font-size: $desc-size;
        color: $desc-color;
        padding: 10px 30px;
        width: 100%;
        box-sizing: border-box;
        text-decoration: none;
        display: inline-block;
        transition: all .3s ease;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
          color: $primary-color;
          background:  $primary-hover-light-color;
        }
      }
      .router-link-exact-active {
        color: $primary-color;
        background:  $primary-hover-light-color;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: #6190E8;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          @include barShadow;
        }
      }
    }
    .bar-item:last-child{
      margin-bottom: 0px;
    }
  }
</style>