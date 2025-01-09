<script setup>
import DefaultBackground from "@/components/index/DefaultBackground.vue";
import Card from "@/components/index/Card.vue";
import ImageCard from "@/components/index/ImageCard.vue";
// 定义多个 ImageCard 的数据
const cards = [
  {
    title: "败犬女主太多了",
    year: "2024",
    category: "动作",
    imageUrl: new URL('@/assets/img/comic/败犬女主太多了.png', import.meta.url).href,
    description: "洒脱的女生很有魅力"
  },
  {
    title: "小魔女学园",
    year: "2017",
    category: "冒险",
    imageUrl: new URL('@/assets/img/comic/小魔女学园.jpg', import.meta.url).href,
    description: "相信的心就是你的魔法！"
  },
  { title: "败犬女主太多了", year: "2024", category: "动作", imageUrl: new URL('@/assets/img/comic/败犬女主太多了.png', import.meta.url).href },
  { title: "败犬女主太多了", year: "2024", category: "动作", imageUrl: new URL('@/assets/img/comic/败犬女主太多了.png', import.meta.url).href },
  { title: "败犬女主太多了", year: "2024", category: "动作", imageUrl: new URL('@/assets/img/comic/败犬女主太多了.png', import.meta.url).href },
];
</script>

<template>
  <default-background>
    <div class="content">
      <card id="card">
        <!-- 使用 v-for 循环渲染多个 ImageCard -->
        <ImageCard
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :year="card.year"
            :category="card.category"
            :image-url="card.imageUrl"
            :description="card.description"
        />
      </card>
    </div>
  </default-background>
</template>

<style scoped>
.content {
  min-height: 100vh;
  display: flex;
  justify-content: center; /* 居中 */
}

#card {
  display: flex;
  flex-flow: row wrap; /* 使用流式布局，换行排列 */
  justify-content: center;
  align-items: flex-start;
  gap: 20px; /* 元素之间的间隔 */
  margin-top: 100px;
  width: 80%; /* 控制卡片的宽度 */
  padding: 20px;
}
</style>
