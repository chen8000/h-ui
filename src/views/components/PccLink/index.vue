<!--
 * @Date: 2020-07-30 10:40:57
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-31 16:21:55
--> 
<template>
  <div>
    <page-layout page-title="PccLink 省市区联动" doc-title="基础用法">
      <div slot="component" style="width: 500px;">
        <h-pcc-link
          label="地区：" 
          layout="top"
          :province="province"
          :city="city"
          :county="county"
        />
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-pcc-link
              label="地区：" 
              layout="top"
              :province="province"
              :city="city"
              :county="county"
            /&gt;
          </code>
          <code class="javascript">
            import { province, city, county } from '@/tools'

            computed: {
              province: () => province,
              city: () => city,
              county: () => county
            },
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout doc-title="隐藏未选项">
      <div slot="component" style="width: 500px;">
        <h-pcc-link 
          label="地区：" 
          layout="top"
          hide-not-selected
          :province="province"
          :city="city"
          :county="county"
        />
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-pcc-link
              label="地区：" 
              layout="top"
              hide-not-selected
            /&gt;
          </code>
          <code class="javascript">
            import { province, city, county } from '@/tools'

            computed: {
              province: () => province,
              city: () => city,
              county: () => county
            },
          </code>
        </pre>
      </div>
    </page-layout>

    <doc-params title="Attributes">
      <h-table :data-length="params.length" :tr-height="50">
        <el-table :data="params">
          <el-table-column prop="params" label="参数" width="400"></el-table-column>
          <el-table-column prop="doc" label="说明" width="350"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="required" label="是否必填">
            <template slot-scope="scope">
              {{scope.row.required || '--'}}
            </template>
          </el-table-column>
          <el-table-column prop="options" label="可选项"></el-table-column>
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
  import { province, city, county } from '@/tools'
  export default {
    computed: {
      province: () => province,
      city: () => city,
      county: () => county
    },
    data(){
      return {
        params: [
          {
            params: 'province / city / county',
            doc: '省市区json（参考《省市区json》页面数据格式）',
            type: 'Array / Object',
            required: '是',
            options: '--',
            default: '--'
          },
          {
            params: 'connect-symbol',
            doc: '定义连接符号',
            type: 'String',
            options: '--',
            default: '-'
          },
          {
            params: 'height',
            doc: '设置选项框的高度',
            type: 'String',
            options: '--',
            default: '30px'
          },
          {
            params: 'layout / label / label-width / label-align / required',
            doc: 'label设置参考 FormItem 表单布局组件 ',
            type: '--',
            options: '--',
            default: '--'
          },
          {
            params: 'hide-not-selected',
            doc: '隐藏未选项',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          }
        ],
        events: [
          {
            name: 'change',
            doc: '选项发送改变后触发',
            callback: '({province, city, county})'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>