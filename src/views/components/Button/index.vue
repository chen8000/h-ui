<!--
 * @Date: 2020-07-05 15:00:10
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 16:16:57
--> 
<template>
  <div class="button">
    <page-layout pageTitle="Button 按钮" docTitle="实心按钮" >
      <div slot="component">
        <h-button type="primary">主色按钮</h-button>
        <h-button type="success">成功按钮</h-button>
        <h-button type="danger">危险按钮</h-button>
        <h-button type="warning">警告按钮</h-button>
        <h-button type="info">信息按钮</h-button>
        <h-button>默认按钮</h-button>
        <h-button type="text">文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary"&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button type="success"&gt;成功按钮&lt;/h-button&gt;
            &lt;h-button type="danger"&gt;危险按钮&lt;/h-button&gt;
            &lt;h-button type="warning"&gt;警告按钮&lt;/h-button&gt;
            &lt;h-button type="info"&gt;信息按钮&lt;/h-button&gt;
            &lt;h-button&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text"&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="空心按钮">
      <div slot="component">
        <h-button type="primary" hollow>主色按钮</h-button>
        <h-button type="success" hollow>成功按钮</h-button>
        <h-button type="danger" hollow>危险按钮</h-button>
        <h-button type="warning" hollow>警告按钮</h-button>
        <h-button type="info" hollow>信息按钮</h-button>
        <h-button hollow>默认按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" hollow&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button type="success" hollow&gt;成功按钮&lt;/h-button&gt;
            &lt;h-button type="danger" hollow&gt;危险按钮&lt;/h-button&gt;
            &lt;h-button type="warning" hollow&gt;警告按钮&lt;/h-button&gt;
            &lt;h-button type="info" hollow&gt;信息按钮&lt;/h-button&gt;
            &lt;h-button hollow&gt;默认按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="按钮禁用状态">
      <div slot="component">
        <h-button type="primary" disabled>主色按钮</h-button>
        <h-button hollow disabled>默认按钮</h-button>
        <h-button type="text" disabled>文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" disabled&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button hollow disabled&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text" disabled&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="带icon的按钮">
      <div slot="component">
        <h-button type="success" icon="iconfont iconyiliaohangyedeICON-">主色按钮</h-button>
        <h-button icon="iconfont iconshangchuan">默认按钮</h-button>
        <h-button type="text" icon="iconfont iconbianji3">文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="success" icon="iconfont iconyiliaohangyedeICON-"&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button icon="iconfont iconshangchuan"&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text" icon="iconfont iconbianji3"&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="按钮大小" docDesc="medium">
      <div slot="component">
        <h-button type="primary" medium>主色按钮</h-button>
        <h-button type="success" medium>成功按钮</h-button>
        <h-button type="danger" medium>危险按钮</h-button>
        <h-button type="warning" medium>警告按钮</h-button>
        <h-button type="info" medium>信息按钮</h-button>
        <h-button medium>默认按钮</h-button>
        <h-button type="text" medium>文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" medium&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button type="success" medium&gt;成功按钮&lt;/h-button&gt;
            &lt;h-button type="danger" medium&gt;危险按钮&lt;/h-button&gt;
            &lt;h-button type="warning" medium&gt;警告按钮&lt;/h-button&gt;
            &lt;h-button type="info" medium&gt;信息按钮&lt;/h-button&gt;
            &lt;h-button medium&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text" medium&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docDesc="small">
      <div slot="component">
        <h-button type="primary" small>主色按钮</h-button>
        <h-button type="success" small>成功按钮</h-button>
        <h-button type="danger" small>危险按钮</h-button>
        <h-button type="warning" small>警告按钮</h-button>
        <h-button type="info" small>信息按钮</h-button>
        <h-button small>默认按钮</h-button>
        <h-button type="text" small>文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" small&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button type="success" small&gt;成功按钮&lt;/h-button&gt;
            &lt;h-button type="danger" small&gt;危险按钮&lt;/h-button&gt;
            &lt;h-button type="warning" small&gt;警告按钮&lt;/h-button&gt;
            &lt;h-button type="info" small&gt;信息按钮&lt;/h-button&gt;
            &lt;h-button small&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text" small&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docDesc="mini">
      <div slot="component">
        <h-button type="primary" mini>主色按钮</h-button>
        <h-button type="success" mini>成功按钮</h-button>
        <h-button type="danger" mini>危险按钮</h-button>
        <h-button type="warning" mini>警告按钮</h-button>
        <h-button type="info" mini>信息按钮</h-button>
        <h-button mini>默认按钮</h-button>
        <h-button type="text" mini>文字按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" mini&gt;主色按钮&lt;/h-button&gt;
            &lt;h-button type="success" mini&gt;成功按钮&lt;/h-button&gt;
            &lt;h-button type="danger" mini&gt;危险按钮&lt;/h-button&gt;
            &lt;h-button type="warning" mini&gt;警告按钮&lt;/h-button&gt;
            &lt;h-button type="info" mini&gt;信息按钮&lt;/h-button&gt;
            &lt;h-button mini&gt;默认按钮&lt;/h-button&gt;
            &lt;h-button type="text" mini&gt;文字按钮&lt;/h-button&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="宽度撑满父元素">
      <div slot="component">
        <h-button type="primary" long>主色按钮</h-button>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-button type="primary" long&gt;主色按钮&lt;/h-button&gt;
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
          <el-table-column prop="options" label="可选值" width="450"></el-table-column>
          <el-table-column prop="default" label="默认值"></el-table-column>
        </el-table>
      </h-table>
    </doc-params>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        params: [
          {
            params: 'type',
            doc: '按钮类型',
            type: 'String',
            options: 'primary / success / warning / danger / info / text',
            default: '--'
          },
          {
            params: 'hollow',
            doc: '空心按钮',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'disabled',
            doc: '禁用按钮',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'icon',
            doc: '带图标的按钮',
            type: 'String',
            options: '--',
            default: '--'
          },
          {
            params: 'medium / small / mini',
            doc: '按钮大小',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          },
          {
            params: 'long',
            doc: '充满父元素的按钮',
            type: 'Boolean',
            options: 'true / false',
            default: 'false'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    button {
      margin-right: 15px;
    }
  }
</style>