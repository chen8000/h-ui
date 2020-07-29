<!--
 * @Date: 2020-07-15 16:06:33
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 11:43:40
--> 
<template>
  <div style="margin: 50px;">
    <h-input 
      v-model="inputVal"
      clearable
      @blur="handleBlur"
      bottom-line
      shadow
      @focus="handleFocus"
      type="text">
      <!-- <i slot="left-icon" class="iconfont iconbianji3"></i> -->
      <i slot="right-icon" class="iconfont iconbianji3"></i>
    </h-input>
    <!-- {{inputVal}} -->
  </div>
</template>

<script>
  export default {
    data(){
      return {
        inputVal: ''
      }
    },
    methods: {
      handleBlur(event){
        console.log('blur>>>', event.target.value)
      },
      handleFocus(event){
        console.log('focus>>>', event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>