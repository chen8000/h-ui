<!--
 * @Date: 2020-07-29 15:33:07
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-31 12:09:43
--> 
<template>
  <div style="margin: 50px;">
    <h-pcc-link 
      label="地区123" 
      layout="top" 
      label-width="130px"
      label-align="left"
      required="left"
      @change="handleChange"
      :city="city"
      :county="county"
      :province="province"
    />
  </div>
</template>

<script>
  import { province, city, county } from '../tools'
  export default {
    computed: {
      province: () => province,
      city: () => city,
      county: () => county
    },
    methods: {
      handleChange(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>