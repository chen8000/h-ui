
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 14:51:56
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
