<!--
 * @Date: 2020-07-07 14:36:13
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 18:39:19
--> 
<template>
  <div 
    id="tableBox" 
    :class="[
      `${yplTable && 'h--table h--table--default'}`,
      `${yplTable && isBg && 'h--table--bg'}`,
      `${yplTable && shadow && 'h--table--hover--shadow'}`
      ]"
    :style="{'height': tableHeight}">
    <div ref="table" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h-table',
    props: {
      // 是否使用ypl table
      yplTable: {
        type: Boolean,
        default: false
      },
      // 表格tr是否带背景 is-bg
      isBg: {
        type: Boolean,
        default: false
      },
      // 是否带阴影
      shadow: {
        type: Boolean,
        default: false
      },
      // 显示的数据条数 :data-length="5"
      dataLength: {
        type: Number,
        default: 0
      },
      // 表格每列的高度 :tr-height="50"
      trHeight: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        tableHeight: 0,
        // inter: 0,
        loading: true
      }
    },
    watch: {
      dataLength () {
        this.setTableHeight()
      }
    },
    mounted() {
      // 计算table的高度
      this.setTableHeight()
    },
    methods: {
      setTableHeight() {
        this.dataLength && (this.tableHeight = (this.dataLength + 1) * this.trHeight + 'px')
      }
    }
  }
</script>

<style lang="scss">
  @import '@/config/theme';
  @import './index.scss';
  .h--table {
    margin: 15px;
    // padding: 10px;
    position: relative;
    .el-table {
      position: absolute;
    }
  }
  
</style>