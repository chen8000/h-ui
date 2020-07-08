
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 16:42:09
--> 


<template>
  <div id="app">
    <!-- <Button/> -->
    <!-- <Table/> -->
    <Pagination/>
  </div>
</template>
<script>
// import Button from './components/button'
// import Table from './components/table'
import Pagination from './components/pagination'
export default {
  name: 'App',
  components: {
    // Button,
    // Table,
    Pagination
  }
}
</script>

<style>
  #app{
    /* background: #eee; */
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
