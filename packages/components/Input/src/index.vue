<!--
 * @Date: 2020-07-15 16:03:55
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 11:43:25
--> 
<template>
  <div 
    class="h--input" 
    :style="{'height': height}" 
    @mouseenter="iconOpacity = '1'"
    @mouseleave="iconOpacity = '0'"
    >
    <div :class="{'h--left--icon--container': $slots['left-icon'] || leftIcon}">
      <slot name="left-icon">
        <i v-if="leftIcon" :class="leftIcon"></i>
      </slot>
    </div>
    <input 
      :type="showPwd ? 'text': type"
      :disabled="disabled"
      :placeholder="placeholder"
      ref="input"
      :class="[
        'h--input--ele',
        {'h--input--radius': radius && !bottomLine},
        {'h--input--ele-shadow': shadow && !bottomLine},
        {'h--input--danger': danger},
        {'h--input--danger--shadow': shadow && danger && !bottomLine},
        {'h--input--disabled': disabled},
        {'h--input--left--icon': $slots['left-icon'] || leftIcon},
        {'h--input--right--icon': $slots['right-icon'] || rightIcon},
        {'h--input--bottom-line': bottomLine}
      ]"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="handleInput">
    <div :class="{'h--right--icon--container': rightJud}">
      <slot name="right-icon" v-if="!iconCross">
        <!-- 右侧自定义icon -->
        <i v-if="rightIcon" :class="rightIcon"></i>
      </slot>
      <!-- 清空value -->
        <i 
          v-if="clearable && inputVal" 
          @click="handleClearable" 
          :style="{'opacity': iconOpacity}"
          class="h--input--clearable iconfont iconqingkong"></i>

      <!-- 显示密码 -->
      <i 
        v-if="showPassword && inputVal && type === 'password'"
        @click="handleShowPwd" 
        :style="{'opacity': iconOpacity}"
        :class="[
          'h--input--show-pwd iconfont',
          {'iconyanjing': !showPwd},
          {'iconyanjing-zhengkai': showPwd }
        ]"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h-input',
    props: {
      // 双向数据绑定 v-model
      value: {
        default: ''
      },
      // 输入框类型
      type: {
        type: String,
        default: 'text'
      },
      // input的高度，默认30px
      height: {
        type: String,
        default: '30px'
      },
      // 是否带圆角  bottom-line 为false时有效
      radius: {
        type: Boolean,
        default: true
      },
      // 获取焦点后是否带阴影 bottom-line 为false时有效
      shadow: {
        type: Boolean,
        default: false
      },
      // 危险提示
      danger: {
        type: Boolean,
        default: false
      },
      // 输入框占位文本
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      
      // 左右icon class
      // left-icon="iconfont iconbianji3"
      // right-icon="iconfont iconbianji3"
      leftIcon: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: ''
      },
      // 是否可清空
      clearable: {
        type: Boolean,
        default: false
      },
      // 密码是否可看 只在 type="password" 时有效
      showPassword: {
        type: Boolean,
        default: false
      },
      // 只有一条下划线, radius / shadow 会因此失效
      bottomLine: {
        type: Boolean,
        default: false
      }

      // 左右icon slot插入
      // <!-- <i slot="left-icon" class="iconfont iconbianji3"></i> -->
      // <!-- <i slot="right-icon" class="iconfont iconbianji3"></i> -->

      // 事件
      // blur
    },
    data(){
      return {
        // 视图动态标记
        inputVal: '',
        showPwd: false,
        iconOpacity: '0'
      }
    },
    computed: {
      rightJud(){
        return this.$slots['right-icon'] || this.rightIcon || this.clearable || (this.showPassword && this.type === 'password')
      },
      iconCross(){
        return this.inputVal && this.iconOpacity === '1' && (this.clearable || (this.showPassword && this.type === 'password'))
      }
    },
    mounted(){
      // 提示参数错误
      this.handleConsoleAttributesWarning()
    },
    methods: {
      handleInput(event){
        this.inputVal = event.target.value
        this.$emit('input', event.target.value)
      },
      // 清空value
      handleClearable() {
        this.$emit('input', '')
        this.$refs.input.value = ''
        this.inputVal = ''
      },
      // 密码是否可看
      handleShowPwd(){
        this.showPwd = !this.showPwd
      },

      // 提示参数错误
      handleConsoleAttributesWarning(){
        if(this.showPassword && this.type !== 'password') {
          console.warn('Attributes异常，show-password只在type="password"时有效！')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../assets/fonts/iconfont.css';
  @import '@/assets/theme';
  @import './index.scss';
</style>