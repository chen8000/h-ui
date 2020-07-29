<!--
 * @Date: 2020-07-29 15:33:07
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 17:50:48
--> 
<template>
  <div style="margin: 50px;">
    <h-pcc-link 
      label="地区" 
      layout="top" 
      label-width="130px"
      label-align="left"
      required="left"
      hide-not-selected
      @change="handleChange"
      />
  </div>
</template>

<script>
  export default {
    methods: {
      handleChange(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>