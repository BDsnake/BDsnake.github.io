<script setup>
import { defineProps } from 'vue';

// 定义配置项，isBlur 用于选择毛玻璃效果
const props = defineProps({
  isBlur: {
    type: Boolean,
    default: false, // 默认使用半透明效果
  },
});
</script>

<template>
  <div id="card" :class="{'blur-effect': props.isBlur, 'transparent-effect': !props.isBlur}">
    <slot></slot>
  </div>
</template>

<style scoped>
#card {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  //justify-content: space-around; /* 元素间均匀分布 */
  gap: 30px; /* 控制元素间的间距 */
  margin: 0 20%;
  padding: 20px;
  min-width: 60vw;
  border-radius: 25px; /* 圆角矩形 */
  box-shadow: 0 4px 8px rgba(108, 107, 107, 0.3); /* 阴影效果 */
}

/* 半透明效果 */
#card.transparent-effect {
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
}

/* 毛玻璃效果 */
#card.blur-effect {
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
}
</style>
