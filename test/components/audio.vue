<!--
 * @Date: 2020-07-08 18:07:50
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-28 10:17:28
--> 
<template>
  <div class="audio">
    <h-audio :volume-button="true" download :src="require('../assets/audio/m.mp3')"/>
    <br/>
    <h-audio 
      title="语音001"
      layout="l1" 
      :volume-button="true"
      :volume="100" 
      :src="require('../assets/audio/m.mp3')"/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .audio {
    margin: 100px;
  }
</style>