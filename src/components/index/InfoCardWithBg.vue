<script setup>
import { defineProps } from 'vue';

// 定义配置项，isBlur 用于选择毛玻璃效果
const props = defineProps({
  isBlur: {
    type: Boolean,
    default: false, // 默认使用半透明效果
  },
  bgImage: {
    type: String,
    default: '', // 默认无背景图片
  },
});
</script>

<template>
  <div
      id="card"
      :class="{ 'blur-effect': props.isBlur, 'transparent-effect': !props.isBlur }"
      :style="{ backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none' }"
  >
    <!-- 使用一个 div 包裹 <slot> 内容，并应用毛玻璃效果 -->
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
#card {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: 100%;
  min-width: 60vw;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(108, 107, 107, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: breathe 10s ease-in-out infinite; /* 添加呼吸效果 */
}

/* 半透明效果 */
#card.transparent-effect {
  background-color: rgba(255, 255, 255, 0.5);
}

/* 毛玻璃效果 */
#card.blur-effect {
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  background-color: rgba(255, 255, 255, 0.6); /* 半透明白色背景 */
}

/* 包裹 <slot> 的 div，应用毛玻璃效果 */
.slot-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
  background-color: rgba(255, 255, 255, 0.6); /* 半透明白色背景 */
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #333; /* 字体颜色，避免白色背景下文字不可见 */
}

/* 背景呼吸效果 */
@keyframes breathe {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 110%; /*呼吸放大比例*/
  }
  100% {
    background-size: 100%;
  }
}
</style>
