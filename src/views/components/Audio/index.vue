<!--
 * @Date: 2020-07-08 16:07:34
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 18:36:29
--> 
<template>
  <div class="audio">
    <page-layout pageTitle="Audio 音频播放器" docTitle="音频播放器 / 默认" >
      <div slot="component">
        <h-audio :src="require('@/assets/audio/m.mp3')"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-audio :src="require('@/assets/audio/m.mp3')"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="音频播放器 / 默认 / 圆角 / 带音量调节按钮" >
      <div slot="component">
        <h-audio radius :volume-button="true" :src="require('@/assets/audio/m.mp3')"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-audio radius :volume-button="true" :src="require('@/assets/audio/m.mp3')"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="布局（l1）" >
      <div slot="component">
        <h-audio title="语音001" layout="l1" :volume="100" :src="require('@/assets/audio/m.mp3')"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-audio title="语音001" layout="l1" :volume="100" :src="require('@/assets/audio/m.mp3')"/&gt;
          </code>
        </pre>
      </div>
    </page-layout>

    <page-layout docTitle="布局（l1）/ 带音量调节按钮" >
      <div slot="component">
        <h-audio 
          title="语音001" 
          layout="l1" 
          :volume="100" 
          :volume-button="true"
          :src="require('@/assets/audio/m.mp3')"/>
      </div>
      <div slot="code">
        <pre v-highlight>
          <code class="html">
            &lt;h-audio 
              title="语音001" 
              layout="l1" 
              :volume="100" 
              :volume-button="true"
              :src="require('@/assets/audio/m.mp3')"/&gt;
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
          <el-table-column prop="options" label="可选值"></el-table-column>
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
        params: [
          {
            params: 'src',
            doc: '音乐文件地址',
            type: 'String',
            options: '--',
            required: '是',
            default: '--'
          },
          {
            params: 'volume',
            doc: '默认音量',
            type: 'Number',
            options: '--',
            required: '否',
            default: '40'
          },
          {
            params: 'volume-button',
            doc: '是否显示音量调节按钮',
            type: 'Boolean',
            options: 'true / false',
            required: '否',
            default: 'false'
          },
          {
            params: 'radius',
            doc: '圆角',
            type: 'Boolean',
            options: 'true / false',
            required: '否',
            default: 'false'
          },
          {
            params: 'layout',
            doc: '布局',
            type: 'String',
            options: 'l1',
            required: '否',
            default: '--'
          },
          {
            params: 'title',
            doc: '目前只有layout为 l1 时有效',
            type: 'String',
            options: '--',
            required: '否',
            default: '--'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .audio {

  }
</style>