<!--
 * @Date: 2020-07-08 16:07:34
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-30 11:20:43
--> 
<template>
  <div class="audio">
    <page-layout pageTitle="Pagination 分页" docTitle="分页 / 靠左" >
      <div slot="component">
        <h-pagination :pageSize="10" :total="1000" @change="sizeChange"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-pagination :pageSize="10" :total="1000" @change="sizeChange"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <!-- 接口说明 -->
    <doc-params title="Attributes">
      <h-table :data-length="params.length" :tr-height="50">
        <el-table :data="params">
          <el-table-column prop="params" label="参数"></el-table-column>
          <el-table-column prop="doc" label="说明"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="required" label="是否必填"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
        </el-table>
      </h-table>
    </doc-params>

    <doc-params title="Events">
      <h-table :data-length="events.length" :tr-height="50">
        <el-table :data="events">
          <el-table-column prop="name" label="事件名称" width="400"></el-table-column>
          <el-table-column prop="doc" label="说明" width="300"></el-table-column>
          <el-table-column prop="callback" label="回调函数"></el-table-column>
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
            params: 'pageSize',
            doc: '每页显示条目',
            type: 'Number',
            required: '是',
            default: '10'
          },
          {
            params: 'total',
            doc: '总条目数',
            type: 'Number',
            required: '是',
            default: '100'
          },
          {
            params: 'right',
            doc: '靠右(默认靠左)',
            type: 'Boolean',
            required: '否',
            default: 'false'
          }
        ],
        events: [
          {
            name: 'change',
            doc: '选项发送改变后触发',
            callback: '(pageSize)'
          }
        ]
      }
    },
    methods: {
      sizeChange(val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .audio {

  }
</style>