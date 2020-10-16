<!--
 * @Date: 2020-07-28 18:01:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-30 18:56:45
--> 
<template>
  <div class="input">
    <page-layout pageTitle="Input 按钮" docTitle="基础用法">
      <div slot="component">
        <h-input />
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-input/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="左 / 右侧自定义icon / 可清空">
      <div slot="component">
        <h-input left-icon="iconfont iconbianji3" style="margin-bottom: 30px;"/>
        <h-input right-icon="iconfont iconbianji3" clearable  style="margin-bottom: 30px;"/>
        <h-input right-icon="iconfont iconbianji3" show-password type="password"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-input left-icon="iconfont iconbianji3"/&gt;
            &lt;h-input right-icon="iconfont iconbianji3" clearable/&gt;
            &lt;h-input right-icon="iconfont iconbianji3" show-password type="password"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    

    <page-layout docTitle="获取焦点后是否带阴影">
      <div slot="component">
        <h-input shadow/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-input shadow/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="限制最大输入值">
      <div slot="component">
        <h-input :maxlength="10"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-input :maxlength="10"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="禁用">
      <div slot="component">
        <h-input disabled/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-input disabled/&gt;
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

    <doc-params title="Slots">
      <h-table :data-length="slots.length" :tr-height="50">
        <el-table :data="slots">
          <el-table-column prop="name" label="name" width="300"></el-table-column>
          <el-table-column prop="doc" label="说明"></el-table-column>
        </el-table>
      </h-table>
    </doc-params>

    <doc-params title="Events">
      <h-table :data-length="events.length" :tr-height="50">
        <el-table :data="events">
          <el-table-column prop="eventName" label="事件名称" width="300"></el-table-column>
          <el-table-column prop="doc" label="说明"></el-table-column>
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
            params: 'type',
            doc: '输入框类型',
            type: 'String',
            options: '所有原生input的类型都可',
            default: 'text'
          },
          {
            params: 'height',
            doc: 'input框的高度',
            type: 'String',
            options: '--',
            default: '30px'
          },
          {
            params: 'radius',
            doc: '是否带圆角',
            type: 'Boolean',
            options: 'true / false',
            default: 'true'
          },
          {
            params: 'shadow',
            doc: '获取焦点后是否带阴影',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'danger',
            doc: '危险提示',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'placeholder',
            doc: '输入框占位文本',
            type: 'String',
            options: '--',
            default: '请输入内容'
          },
          {
            params: 'disabled',
            doc: '是否禁用',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'left-icon',
            doc: '左侧icon',
            type: 'String',
            options: '--',
            default: '--'
          },
          {
            params: 'right-icon',
            doc: '右侧icon',
            type: 'String',
            options: '--',
            default: '--'
          },
          {
            params: 'clearable',
            doc: '是否可清空',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'show-password',
            doc: '密码是否可看 只在 type="password" 时有效',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'bottomLine',
            doc: '只有一条下划线, radius / shadow 会因此失效',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'maxlength',
            doc: '限制最大输入值',
            type: 'Number',
            options: '--',
            default: '--'
          }
        ],
        slots: [
          {
            name: 'left-icon',
            doc: '左侧icon'
          },
          {
            name: 'right-icon',
            doc: '右侧icon'
          }
        ],
        events: [
          {
            eventName: 'blur',
            doc: '在 Input 失去焦点时触发',
            callback: '(event)'
          },
          {
            eventName: 'focus',
            doc: '在 Input 获得焦点时触发',
            callback: '(event)'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    .h--input {
      width: 300px;
    }
  }
</style>