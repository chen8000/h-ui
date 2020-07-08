
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 18:08:33
--> 


<template>
  <div id="app">
    <!-- <Button/> -->
    <!-- <Table/> -->
    <!-- <Pagination/> -->
    <Audio/>
  </div>
</template>
<script>
// import Button from './components/button'
// import Table from './components/table'
// import Pagination from './components/pagination'
import Audio from './components/audio'
export default {
  name: 'App',
  components: {
    // Button,
    // Table,
    // Pagination,
    Audio
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
