<script setup>
import { defineProps } from 'vue';

// 定义卡片的属性：图片、标题、年份和分类
const props = defineProps({
  imageUrl: {
    type: String,
    required: true, // 图片是必填项
  },
  title: {
    type: String,
    required: true, // 标题是必填项
  },
  year: {
    type: String,
    required: true, // 年份是必填项
  },
  category: {
    type: String,
    required: true, // 分类是必填项
  },
});
</script>

<template>
  <div class="card">
    <div class="image-container">
      <img :src="props.imageUrl" alt="card image" class="card-image"/>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ props.title }}</h3>
      <!-- 分类和年份放在同一行，分类居左，年份居右 -->
      <div class="card-footer">
        <span class="card-category">{{ props.category }}</span>
        <span class="card-year">{{ props.year }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  width: 100%;
  max-width: 300px; /* 限制最大宽度 */
  height: 400px; /* 高度可以根据需要调整 */
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
}

.image-container {
  width: 100%;
  height: 60%; /* 图片占卡片的 60% */
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片覆盖容器 */
  transition: transform 0.6s ease; /* 添加过渡动画 */
}
.card-image:hover {
  transform: scale(1.05); /* 鼠标悬停时放大 5% */
}
.card-content {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-footer {
  display: flex;
  justify-content: space-between; /* 分类居左，年份居右 */
  font-size: 1.2rem;
  color: #777;
  width: 100%;
}

.card-category {
  text-align: left;
}

.card-year {
  text-align: right;
}
</style>
