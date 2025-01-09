<script setup>
import config from "@/config.js";  // 导入配置文件

// 获取背景图片的 URL
const backgroundImageUrl = config.backgroundImageUrl;
</script>

<template>
  <div id="top-image" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
    <slot></slot>
  </div>
</template>

<style scoped>
#top-image {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  //height: 100%;
  //background-image: url(${background}); /* 你的背景图 */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 固定背景 */
}
</style>