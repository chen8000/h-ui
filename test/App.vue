
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 18:08:38
--> 


<template>
  <div id="app">
    <!-- <Button/> -->
    <Table/>
  </div>
</template>
<script>
// import Button from './components/button'
import Table from './components/table'
export default {
  name: 'App',
  components: {
    // Button,
    Table
  }
}
</script>

<style>
  #app{
    background: #eee;
  }
*{
    padding: 0;
    margin: 0;
  }
  .row1 {
    margin-top: 20px;
  }
  .row1 button{
    margin-right: 10px;
  }
</style>
