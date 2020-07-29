<!--
 * @Date: 2020-07-29 15:21:15
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 18:13:31
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
              v-for="item in province"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </h-select>
        <span  v-if="hideNotSelected && city" class="h--connect--symbol">{{connectSymbol}}</span>
        <h-select :height="height" v-if="hideNotSelected && city">
          <el-select 
            @change="handleCityVal"
            v-model="cityVal">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in city"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </h-select>
        <span v-if="hideNotSelected && county" class="h--connect--symbol">{{connectSymbol}}</span>
        <h-select :height="height" v-if="hideNotSelected && county">
          <el-select 
            @change="handleCountyVal"
            v-model="countyVal">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in county"
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
// { province, city, county }
  import { province, city, county } from '@/tools/pcc'
  export default {
    name: 'h-pcc-link',
    props: {
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

        // 返回数据
        changeVal: {
          province: undefined,
          city: undefined,
          county: undefined
        }
      }
    },
    computed:{
      province: () => province,
      city(){
        return city[this.provinceVal]
      },
      county(){
        return county[this.cityVal]
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
    methods: {

      handleProvinceVal(){
        this.changeVal.province = province.filter(res => res.id === this.provinceVal)[0]
      },
      handleCityVal() {
        this.changeVal.city = city[this.provinceVal].filter(res => res.id === this.cityVal)[0]
      },
      handleCountyVal(){
        this.changeVal.county = county[this.cityVal].filter(res => res.id === this.countyVal)[0]
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/theme';
  @import './index.scss';
</style>