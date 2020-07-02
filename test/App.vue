
<!--
 * @Date: 2020-07-01 11:32:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-02 17:08:49
--> 

<template>
  <div id="app" class="theme1">
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
      <h4>左侧icon</h4>
      <h-button type="success">主色按钮</h-button>
      <h-button hollow>默认按钮</h-button>
      <h-button type="text">文字按钮</h-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
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
