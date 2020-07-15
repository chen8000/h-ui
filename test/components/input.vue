<!--
 * @Date: 2020-07-15 16:06:33
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 16:24:08
--> 
<template>
  <div>
    <h-input v-model="inputVal"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        inputVal: ''
      }
    },
    watch: {
      inputVal(v){
        console.log('------', v)
      },
      handleEmit(e){
        console.log('eeee', e)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>