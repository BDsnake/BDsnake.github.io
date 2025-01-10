<script setup>
// 动态导航配置
import { ref } from "vue";

const baseUrl = '/ANMclub';

const navLinks = ref([
  { name: '首页', link: '/home' },  // 修改链接为 /home
  { name: '动漫', link: '/comic' },
  {name:'游戏',link: '/game'},
  {name:'黄油',link:'yellowGame'},
  {name:'网站',link: 'website'},
  {name: '年度群u投票',link: '/vote'}
]);
</script>

<template>
  <header class="navbar">
    <ul class="nav-list">
      <!-- 动态渲染导航项 -->
      <li v-for="item in navLinks" :key="item.name" class="nav-item">
        <!-- 使用 router-link 替代 a 标签 -->
        <router-link :to="item.link" class="nav-link">{{ item.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
/* 样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #ff0000;
  line-height: 1.5;
}

header.navbar {
  display: flex;
  justify-content: center; /* 居中导航栏 */
  align-items: center;
  width: 100%; /* 确保导航栏填满宽度 */
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  border-bottom: 0px solid #ddd;
  padding: 1rem 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-list {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  list-style: none;
  gap: 2rem;
}

.nav-item .nav-link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: #ddd;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
}

.nav-item .nav-link:hover {
  color: #ffffff;
  background-color: #007bff;
  border-radius: 5px;
}
</style>
