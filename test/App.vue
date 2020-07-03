
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-03 16:53:25
--> 

<template>
  <div id="app" :class="theme" :theme="theme">
    <div class="row1">
      <h4>实心：</h4>
      <h-button type="primary">主色按钮</h-button>
      <h-button type="success">成功按钮</h-button>
      <h-button type="danger">危险按钮</h-button>
      <h-button type="warning">警告按钮</h-button>
      <h-button type="info">信息按钮</h-button>
      <h-button>默认按钮</h-button>
      <h-button type="text">文字按钮</h-button>
    </div>
    <div class="row1">
      <h4>空心：</h4>
      <h-button type="primary" hollow>主色按钮</h-button>
      <h-button type="success" hollow>成功按钮</h-button>
      <h-button type="danger" hollow>危险按钮</h-button>
      <h-button type="warning" hollow>警告按钮</h-button>
      <h-button type="info" hollow>信息按钮</h-button>
      <h-button hollow>默认按钮</h-button>
    </div>
    <div class="row1">
      <h4>禁用：</h4>
      <h-button type="primary" disabled>主色按钮</h-button>
      <h-button hollow disabled>默认按钮</h-button>
      <h-button type="text" disabled>文字按钮</h-button>
    </div>
    <div class="row1">
      <h4>icon</h4>
      <h-button type="success" icon="iconfont iconyiliaohangyedeICON-">主色按钮</h-button>
      <h-button icon="iconfont iconshangchuan">默认按钮</h-button>
      <h-button type="text" icon="iconfont iconbianji3">文字按钮</h-button>
    </div>
    <div class="row1">
      <h4>大小</h4>
      <p>medium</p>
      <h-button type="primary" medium>主色按钮</h-button>
      <h-button type="success" medium>成功按钮</h-button>
      <h-button type="danger" medium>危险按钮</h-button>
      <h-button type="warning" medium>警告按钮</h-button>
      <h-button type="info" medium>信息按钮</h-button>
      <h-button medium>默认按钮</h-button>
      <h-button type="text" medium>文字按钮</h-button>

      <p>small</p>
      <h-button type="primary" small>主色按钮</h-button>
      <h-button type="success" small>成功按钮</h-button>
      <h-button type="danger" small>危险按钮</h-button>
      <h-button type="warning" small>警告按钮</h-button>
      <h-button type="info" small>信息按钮</h-button>
      <h-button small>默认按钮</h-button>
      <h-button type="text" small>文字按钮</h-button>

      <p>mini</p>
      <h-button type="primary" mini>主色按钮</h-button>
      <h-button type="success" mini>成功按钮</h-button>
      <h-button type="danger" mini>危险按钮</h-button>
      <h-button type="warning" mini>警告按钮</h-button>
      <h-button type="info" mini>信息按钮</h-button>
      <h-button mini>默认按钮</h-button>
      <h-button type="text" mini>文字按钮</h-button>
    </div>
    <div class="row1">
      <p>宽度撑满父元素</p>
      <h-button type="primary" long>主色按钮</h-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      theme: 'theme1', // 主题名称
    }
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
  }
  .row1 {
    margin-top: 20px;
  }
  .row1 button{
    margin-right: 10px;
  }
</style>
