<!--
 * @Date: 2020-07-08 16:06:44
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-30 11:21:22
--> 
<template>
  <div :class="['h--pagin', {'h--pagin--right':right}]">
    <span v-if="total > pageSize" class="el-pagination__jump">
      前往
      <div class="el-input el-pagination__editor is-in-pagination">
        <input type="text" v-model="toPages" @keyup.enter="handleToPage" autocomplete="off" class="el-input__inner">
      </div>
      页
    </span>
    <el-pagination
      background
      :page-size="pageSize"
      :current-page.sync="currentPage"
      layout="slot, prev, pager, next"
      :hide-on-single-page="true"
      :total="total">
      <span
        @click="handleHomePage" 
        :class="['home-page', {'page-disable': currentPage === 1}]"
        >首页</span>
    </el-pagination>
    <span
      @click="handleLastPage" 
      v-if="total > pageSize"
      :class="['last-page', {'page-disable': currentPage === cPagins}]"
      >末页</span>
  </div>
</template>

<script>
  export default {
    name: 'h-pagination',
    props: {
       // 每页显示条目
      pageSize: {
        type: Number,
        default: 10
      },
      // 总条目数
      total: {
        type: Number,
        default: 100
      },
      // 靠右
      right: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentPage: 1, // 页码
        toPages: '',
      }
    },
    computed: {
      cPagins () {
        return Math.ceil(this.total / this.pageSize)
      }
    },
    watch: {
      currentPage () {
        this.$emit('change', this.currentPage)
      },
      // 限制 + - easdasd 不准输入
      toPages (newVal) {
        let reg = /^[+-]?(0|([1-9]\d*))?$/g
        if (!(reg.test(newVal) && newVal > 0)) {
          this.toPages = this.toPages.substring(0, this.toPages.length - 1)
        }
      }
    },
    methods: {
      // 首页
      handleHomePage(){
        this.currentPage = 1
      },
      // 末页
      handleLastPage() {
        this.currentPage = this.cPagins
      },
      // 前往____页 + 验证
      handleToPage () {
        if (!this.toPages) {
          return
        }
        if (+this.toPages > 0 && +this.toPages < this.cPagins) {
          // if (+this.toPages <= this.cPagins)
          if (this.currentPage < this.cPagins || +this.toPages < this.cPagins) {
            this.currentPage = +this.toPages

            setTimeout(() => {
              this.toPages = this.currentPage
            })
          } else {
            this.toPages = this.currentPage
          }
        } else {
          this.toPages = this.cPagins
          this.currentPage = +this.toPages
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@p/assets/theme';
  @import './index.scss';
</style>