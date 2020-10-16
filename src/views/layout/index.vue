<!--
 * @Date: 2020-07-03 18:08:08
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-10-16 14:52:45
--> 
<template>
  <div class="body">
    <!-- header -->
    <div class="header-container">
      <Header />
    </div>
    <div class="container">
      <!-- left bar -->
      <div class="bar-container">
         <Bar/>
      </div>
      <!-- 右侧内容 -->
      <div class="content-container">
        <Content/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import Bar from './components/bar'
  import Content from './components/content'
  export default {
    components: {
      Header,
      Bar,
      Content
    },
    watch:{
      $route(){
        window._hmt.push(['_trackEvent', `组件切换_${this.$route.name}`, 'click'])
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style';
  .body {
    min-width: 1200px;
    .header-container {
      width: 100%;
      height: 80px;
      background: #fff;
      @include headShadow;
    }
    .container {
      width: 90%;
      margin: 50px auto;
      background: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      @include contentShadow;
      display: flex;
      
      .content-container {
        padding: 30px;
      }
      .bar-container {
        flex: 1;
        padding: 20px 0;
      }
      .content-container {
        flex: 6;
      }
    }
  }
</style>