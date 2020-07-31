<!--
 * @Date: 2020-07-29 15:21:15
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-31 12:04:29
--> 
<template>
  <div class="h--pcc--link">
    <h-form-item 
      :label="label" 
      :layout="layout" 
      :label-align="labelAlign"
      :required="required"
      :label-width="labelWidth">
      
      <div class="h--pcc--link--container">
        <h-select :height="height">
          <el-select 
            @change="handleProvinceVal"
            v-model="provinceVal">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in renderProvince"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </h-select>
        <span  v-if="hideNotSelected ? city : true" class="h--connect--symbol">{{connectSymbol}}</span>
        <h-select :height="height" v-if="hideNotSelected ? city: true">
          <el-select 
            @change="handleCityVal"
            v-model="cityVal">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in renderCity"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </h-select>
        <span v-if="hideNotSelected ? county : true" class="h--connect--symbol">{{connectSymbol}}</span>
        <h-select :height="height" v-if="hideNotSelected ? county : true">
          <el-select 
            @change="handleCountyVal"
            v-model="countyVal">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in renderCounty"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </h-select>
      </div>
    </h-form-item>
  </div>
</template>

<script>
  export default {
    name: 'h-pcc-link',
    props: {
      // 省
      province: {
        type: Array,
        required: true
      },
      // 市
      city: {
        type: Object,
        required: true,
        // default: () => {}
      },
      // 区县
      county: {
        type: Object,
        required: true,
        // default: () => {}
      },
      // 连接符
      connectSymbol: {
        type: String,
        default: '-'
      },
      height: {
        type: String,
        default: '30px'
      },
      layout: {
        type: String,
        default: 'top'
      },
      label: {
        type: String,
        default: ''
      },
      labelWidth: {
        type: String,
        default: ''
      },
      // label的对齐方式 left / right   默认left
      labelAlign: {
        type: String,
        default: 'left'
      },

      // 是否带必填标识  left / right 指定必选标识的位置
      required: {
        type: String,
        default: ''
      },

      // 隐藏未选项
      hideNotSelected: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        provinceVal: '',
        cityVal: '',
        countyVal: '',

        // 省
        renderProvince: [],

        // 返回数据
        changeVal: {
          province: undefined,
          city: undefined,
          county: undefined
        }
      }
    },
    computed:{
      renderCity(){
        return this.city[this.provinceVal]
      },
      renderCounty(){
        return this.county[this.cityVal]
      },
    },
    watch: {
      provinceVal(){
        this.cityVal = ''
        this.countyVal = ''
      },
      cityVal(){
        this.countyVal = ''
      },
      changeVal:{
        handler(){
          this.$emit('change', this.changeVal)
        },
        deep: true
      }
    },
    mounted(){
      this.renderProvince = this.province
    },
    methods: {

      handleProvinceVal(){
        this.changeVal.province = this.province.filter(res => res.id === this.provinceVal)[0]
      },
      handleCityVal() {
        this.changeVal.city = this.city[this.provinceVal].filter(res => res.id === this.cityVal)[0]
      },
      handleCountyVal(){
        this.changeVal.county = this.county[this.cityVal].filter(res => res.id === this.countyVal)[0]
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/theme';
  @import './index.scss';
</style>