<!--
 * @Date: 2020-07-03 17:44:20
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-05 15:02:53
--> 
<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './views/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
<style lang="scss">
  body {
    background: #F8FAFF;
  }
  * {
    padding: 0;
    margin: 0;
  }
</style>
