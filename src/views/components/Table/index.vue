<!--
 * @Date: 2020-07-07 17:35:11
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-11-02 11:22:10
--> 
<template>
  <div class="h-doc-table">
    <page-layout pageTitle="Table 表格" docTitle="带背景的table">
      <h-table slot="component" is-bg ypl-table :data-length="4" :tr-height="50">
        <el-table :data="tableData">
            <el-table-column type="expand" prop="date" label="日期">
              <template>
                <div style="height: 100px;">
                  <el-table :data="tableData">
                    <el-table-column prop="date" label="开始抓取时间" show-overflow-tooltip></el-table-column>
                  </el-table>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </h-table>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-table is-bg ypl-table :data-length="4" :tr-height="50"&gt;
              &lt;el-table :data="tableData"&gt;
                  &lt;el-table-column prop="date" label="日期"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="name" label="姓名"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="address" label="地址"&gt;&lt;/el-table-column&gt;
              &lt;/el-table&gt;
            &lt;/h-table&gt;
          </code>
        </pre>
      </div>
    </page-layout>
    <page-layout docTitle="有背景table / 带阴影">
      <h-table slot="component" shadow ypl-table is-bg :data-length="4" :tr-height="50">
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </h-table>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-table shadow ypl-table is-bg :data-length="4" :tr-height="50"&gt;
              &lt;el-table :data="tableData"&gt;
                  &lt;el-table-column prop="date" label="日期"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="name" label="姓名"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="address" label="地址"&gt;&lt;/el-table-column&gt;
              &lt;/el-table&gt;
            &lt;/h-table&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout isBg docTitle="无背景的table / 带阴影">
      <h-table slot="component" shadow ypl-table :data-length="4" :tr-height="50">
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </h-table>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-table shadow ypl-table :data-length="4" :tr-height="50"&gt;
              &lt;el-table :data="tableData"&gt;
                  &lt;el-table-column prop="date" label="日期"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="name" label="姓名"&gt;&lt;/el-table-column&gt;
                  &lt;el-table-column prop="address" label="地址"&gt;&lt;/el-table-column&gt;
              &lt;/el-table&gt;
            &lt;/h-table&gt;
          </code>
        </pre>
      </div>
    </page-layout>
    <doc-params title="Attributes">
      <h-table :data-length="params.length" :tr-height="50">
        <el-table :data="params">
          <el-table-column prop="params" label="参数"></el-table-column>
            <el-table-column prop="doc" label="说明"></el-table-column>
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
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],

          params: [
            {
              params: 'ypl-table',
              doc: '使用ypl table样式',
              type: 'Boolean',
              options: 'true/false',
              default: 'false'
            },
            {
              params: 'is-bg',
              doc: 'tr是否带背景 is-bg',
              type: 'Boolean',
              options: 'true/false',
              default: 'false'
            },
            {
              params: 'shadow',
              doc: '阴影',
              type: 'Boolean',
              options: 'true/false',
              default: 'false'
            },
            {
              params: 'data-length',
              doc: '显示的数据条数',
              type: 'Number',
              options: '--',
              default: '0'
            },
            {
              params: 'tr-height',
              doc: '表格每列的高度',
              type: 'Number',
              options: '--',
              default: '50'
            }
          ]
        }
      }
  }
</script>