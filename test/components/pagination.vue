<!--
 * @Date: 2020-07-08 16:31:43
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 17:11:38
--> 
<template>
  <div>
    <!-- pageSize: Number,  // 每页显示条目
      total: Number, // 总条目数
      sizeChange: Function, // pageSize 改变时会触发 -->
    <h-pagination :pageSize="10" :total="1000" :sizeChange="sizeChange"/>
  </div>
</template>

<script>
  export default {
    methods: {
      sizeChange(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>