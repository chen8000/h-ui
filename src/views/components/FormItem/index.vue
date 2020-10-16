<!--
 * @Date: 2020-07-29 18:43:23
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 18:57:10
--> 
<template>
  <div>
    <page-layout pageTitle="表单布局" docTitle="label位置 top / left / bottom。 必选提示left / right" >
      <div slot="component">
        <h-form-item label="姓名：" layout="top" style="margin-bottom: 30px;">
          <h-input />
        </h-form-item>
        <h-form-item label="姓名：" layout="left" style="margin-bottom: 30px;">
          <h-input />
        </h-form-item>
        <h-form-item label="姓名：" layout="bottom" style="margin-bottom: 30px;">
          <h-input />
        </h-form-item>
        <h-form-item label="姓名：" layout="top" required="left" style="margin-bottom: 30px;">
          <h-input />
        </h-form-item>
        <h-form-item label="姓名：" layout="top" required="right">
          <h-input />
        </h-form-item>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-form-item label="姓名：" layout="top"&gt;
              &lt;h-input/&gt;
            &lt;/h-button&gt;
            &lt;h-form-item label="姓名：" layout="left"&gt;
              &lt;h-input/&gt;
            &lt;/h-button&gt;
            &lt;h-form-item label="姓名：" layout="bottom"&gt;
              &lt;h-input/&gt;
            &lt;/h-button&gt;
            &lt;h-form-item label="姓名：" layout="top" required="left"&gt;
              &lt;h-input/&gt;
            &lt;/h-button&gt;
            &lt;h-form-item label="姓名：" layout="top" required="right"&gt;
              &lt;h-input/&gt;
            &lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>
    
    <doc-params title="Attributes">
      <h-table :data-length="params.length" :tr-height="50">
        <el-table :data="params">
          <el-table-column prop="params" label="参数" width="150"></el-table-column>
          <el-table-column prop="doc" label="说明" width="340"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="options" label="可选值"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
        </el-table>
      </h-table>
    </doc-params>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        params: [
          {
            params: 'label',
            doc: '表单组的label',
            type: 'String',
            options: '--',
            default: '--'
          },
          {
            params: 'layout',
            doc: 'label的位置',
            type: 'String',
            options: 'top / left / bottom',
            default: 'top'
          },
          {
            params: 'label-width',
            doc: 'label 的宽度',
            type: 'String',
            options: '--',
            default: 'auto'
          },
          {
            params: 'label-align',
            doc: 'label 对齐方式',
            type: 'String',
            options: '--',
            default: 'left'
          },
          {
            params: 'required',
            doc: '是否带必填标识',
            type: 'String',
            options: 'left / right',
            default: '--'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>