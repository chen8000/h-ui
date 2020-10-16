<!--
 * @Date: 2020-07-29 18:58:24
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-30 10:40:08
--> 
<template>
  <div>
    <page-layout pageTitle="Select 下拉框" docTitle="基础用法 / 在element的基础上套了个ui壳子">
      <div slot="component" style="width: 200px;">
        <h-select height="30px">
          <el-select v-model="value">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </h-select>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-select height="30px"&gt;
              &lt;el-select v-model="value"&gt;
                &lt;el-option label="全部" value=""&gt;&lt;/el-option&gt;
                &lt;el-option 
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  &gt;
                &lt;/el-option&gt;
              &lt;/el-select&gt;
            &lt;/h-select&gt;
          </code>
          <code class="javascript">
            export default {
              data(){
                return {
                  value: '',
                  options: [
                    {
                      value: '选项1',
                      label: '黄金糕'
                    }, {
                      value: '选项2',
                      label: '双皮奶'
                    }, {
                      value: '选项3',
                      label: '蚵仔煎'
                    }, {
                      value: '选项4',
                      label: '龙须面'
                    }, {
                      value: '选项5',
                      label: '北京烤鸭'
                    }
                  ]
                }
              }
            }
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
          <el-table-column prop="required" label="是否必填"></el-table-column>
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
        value: '',
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        params: [
          {
            params: 'height',
            doc: '下拉框的高度',
            type: 'Number',
            required: '否',
            default: '30px'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>