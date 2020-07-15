<!--
 * @Date: 2020-07-08 16:07:34
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 18:17:22
-->
<template>
  <!-- 自定义样式 -->
  <div :class="['h--audio-box', `h--audio--layout-${layout}`]">
    <audio ref="audio" v-show="true" :src="src"
    @loadedmetadata="getTimeTotal" 
    @timeupdate="audioTimeUpDate"
    @error="loadError"
    @ended="handleEnd"></audio>
    <div
      :class="['audio-container', {'h--radius': radius}, {'h--volume-l1': volumeButton && ['l1'].includes(layout)}]">
      <!--  播放暂停按钮 -->
      <div class="btn-group"  @mouseover="playOver" @mouseleave="playLeave">
        <i v-if="!playStatus" @click="handlePlay" class="iconfont iconbofang"></i>
        <i v-if="playStatus" class="iconfont iconzantingtingzhi" @click="handlePause"></i>
      </div>
      <!-- 播放时间 -->
      <p class="currentTime">
        <span v-if="['l1'].includes(layout)" class="audio-title">{{title}}</span>
        {{currentTimes}}/{{total}}
      </p>
      <el-slider ref="slider" class="ele-progress" :format-tooltip="formatTooltip" v-model="progress" @change="sliderUp" @input="progressChange"></el-slider>
      <div v-if="volumeButton" class="sound" @mouseover="soundOver" @mouseleave="soundLeave" >
        <!-- 音量 -->
        <div :class="['sound-box', {'h--radius': radius}]" v-show="soundClass">
          <el-slider vertical v-model="sound" :show-tooltip="false" @input="soundChange"></el-slider>
        </div>
        <!-- 音量icon -->
        <i v-if="resSound > 0.0" class="iconfont iconjingyin1"></i>
        <i v-if="resSound === '0.0'" class="iconfont iconjingyin"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
  import { transTime } from '@/tools'
  export default {
    name: 'h-audio',
    props: {
      // audio 的src
      src: {
        type: String,
        required: true
      },
      // 默认音量  默认40
      volume: {
        type: Number,
        default: 40
      },
      // 是否显示音量按钮
      volumeButton: {
        type: Boolean,
        default: false
      },
      // radius 是否要圆角，默认不要
      radius: {
        type: Boolean,
        default: false
      },
      // 布局
      layout: {
        type: String,
        default: '--'
      },
      // 目前只有 layout 为 l1 时有效
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        progress: 0, // 进度条当前的位置
        progressType: false,  // 防止重复触发
        currentTimes: '00:00', // 当前播放的进度
        sound: 40, // 音量
        aObj: null, // audio 对象
        total: 0, // 总时长
        playStatus: false,  // true 正在播放，  false 暂停
        hoverClass: false, // 样式
        soundClass: false 
      }
    },
    computed: {
      resSound () {
        return (this.sound / 100).toFixed(1)
      }
    },
    mounted () {
      this.aObj = this.$refs.audio
      this.getTimeTotal()
      this.addEvent()
      this.init()
    },
    methods: {
      init(){
        // 初始化音量
        this.sound = this.volume || 40
      },
      addEvent () {
        this.$refs.slider.$el.addEventListener('mousedown', () => {
          this.progressType = true
        })
        this.$refs.slider.$el.addEventListener('mouseup', this.sliderUp)
      },
      // 鼠标抬起事件
      sliderUp(){
        setTimeout(() => { this.progressType = false }, 500)
      },
      // 播放
      handlePlay () {
        this.aObj.play()
        this.playStatus = true
      },
      // 暂停
      handlePause () {
        this.aObj.pause()
        this.playStatus = false
      },
      // 获取总时长
      getTimeTotal () {
        this.total = transTime(this.aObj.duration) === 'NaN:NaN' ? '00:00' : transTime(this.aObj.duration)
      },
      // 视频播放进度改变时
      audioTimeUpDate () {
        this.progress = Math.round((Math.floor(this.aObj.currentTime) / Math.floor(this.aObj.duration)) * 100, 0)
        this.currentTimes = transTime(this.aObj.currentTime)
      },
      // 拖动
      // 点下走   抬起不走
      progressChange () {
        if (this.aObj.duration && this.progressType) {
          this.aObj.currentTime = this.progress / 100 * this.aObj.duration
        }
      },
      // 拖动进度条：--音量
      soundChange () {
        this.aObj.volume = (this.sound / 100).toFixed(1)
      },
      // hover提示时间
      formatTooltip(val) {
        let tooltip = this.progress > 0 ? transTime(val / 100 * this.aObj.duration) : '00:00'
        return tooltip === 'NaN:NaN' ? '00:00' : tooltip
      },
      // 音频加载失败
      loadError () {
        this.total = '00:00'
      },
      // 播放完成事件
      handleEnd () {
        this.aObj.currentTime = 0
        this.playStatus = false
      },
      // 播放按钮鼠标移入移出
      playOver () {
        this.hoverClass = true
      },
      playLeave () {
        this.hoverClass = false
      },
      // 喇叭
      soundOver () {
        this.soundClass = true
      },
      soundLeave () {
        this.soundClass = false
      }
    }
  }
</script>

<style lang="scss">
  @import '@/config/theme';
  @import './index.scss';
</style>