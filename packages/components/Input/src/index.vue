<!--
 * @Date: 2020-07-15 16:03:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 16:26:17
--> 
<template>
  <div class="h--input">
    <input type="text" @input="handleInput">
  </div>
</template>

<script>
  export default {
    name: 'h-input',
    props: {
      value: {
        default: ''
      }
    },
    methods: {
      handleInput(event){
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .h--input {
    border: 1px solid red;
    display: inline;
    padding: 0;
    input {
      display: inline-block;
    }
  }
</style>