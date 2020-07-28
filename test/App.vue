
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-28 15:23:25
--> 


<template>
  <div id="app">
    <!-- <Button/> -->
    <!-- <Table/> -->
    <!-- <Pagination/> -->
    <!-- <Audio/> -->
    <Input/>
  </div>
</template>
<script>
// import Button from './components/button'
// import Table from './components/table'
// import Pagination from './components/pagination'
// import Audio from './components/audio'
import Input from './components/input'
export default {
  name: 'App',
  components: {
    // Button,
    // Table,
    // Pagination,
    // Audio,
    Input
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
