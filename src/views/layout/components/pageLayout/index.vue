<!--
 * @Date: 2020-07-05 16:32:07
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-07 11:00:04
--> 
<template>
  <div class="layout-container">
    <h2 v-if="pageTitle" class="h-doc-page-title">{{pageTitle}}</h2>
    <div class="h-row">
      <h4 v-if="docTitle" class="h-doc-title">{{docTitle}}</h4>
      <p v-if="docDesc" class="h-doc-desc">{{docDesc}}</p>
      <div :class="['h-doc-ui-container', `${isBg && 'h-doc-bg'}`]">
        <slot name="component"></slot>
      </div>
      <div class="code">
        <el-collapse @change="handleCollapse">
          <el-collapse-item title="显示代码">
            <slot name="code"></slot>
          </el-collapse-item>
        </el-collapse>
        <!-- <div class="h-doc-desc code-toggle"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import { handleSlot } from '@/modules'
  export default {
    name: 'page-layout',
    props: {
      pageTitle: {
        type: String,
        default: ''
      },
      docTitle: {
        type: String,
        default: ''
      },
      docDesc: {
        type: String,
        default: ''
      },
      isBg: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      codes: function() { return handleSlot(this.$slots)}
    },
    methods: {
      handleCollapse(){
        window._hmt.push(['_trackEvent', `查看代码_${this.$route.name}组件_${this.pageTitle || this.docTitle}`, 'click'])
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/style';
.layout-container{
  .code {
    .el-collapse-item__header {
      justify-content: center;
      width: 100%;
      height: auto;
      line-height: normal;
      // color: $desc-color;
      color: #919da7;
      background: #FAFBFC;
      font-size: $desc-size;
      text-align: center;
      cursor: pointer;
      border: 0;
      padding: 5px 0;
      &:hover {
        color: $primary-color;
      }
      .el-collapse-item__arrow {
        display: none;
      }
    }
    .el-collapse-item__wrap {
      border: 0;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style';
  .layout-container {
    .h-doc-title {
      font-size: $small-title-size;
      color: $title-color;
      font-weight: normal;
      font-size: 16px;
      padding: 20px 0 10px 0;
    }

    .h-doc-page-title {
      @include paramsTitle;
    }

    .h-doc-ui-container {
      padding: 30px;
      border: 1px solid $border;
      border-radius: 4px;
    }

    .h-doc-bg {
      background: $ui-container-bg;
      // background: red;
    }
    
    .h-doc-desc {
      color: $desc-color;
      padding: 5px 0;
    }

    .h-row {
      margin-bottom: 10px;
    }
  }
</style>