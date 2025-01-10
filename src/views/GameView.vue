<script setup>
import DefaultBackground from "@/components/index/DefaultBackground.vue";
import Card from "@/components/index/Card.vue";
import ImageCard from "@/components/index/ImageCard.vue";
// 定义多个 ImageCard 的数据
const cards = [
  {
    title: "金铲铲",
    year: "2021",
    category: "自走棋",
    imageUrl: new URL('@/assets/img/game/金铲铲.png', import.meta.url).href,
    description: "好吃屎 吃好屎 屎好吃"
  },
  {
    title: "无限暖暖",
    year: "2024",
    category: "换装",
    imageUrl: new URL('@/assets/img/game/无限暖暖.png', import.meta.url).href,
    description: "球球了，真的很好玩，它是紫兰心中的年度最佳游戏"
  },
  {
    title: "GRIME",
    year: "2021",
    category: "类银河恶魔城",
    imageUrl: new URL('@/assets/img/game/GRIME.jpg', import.meta.url).href,
    description: "格挡拉满，打击感不错，偏魂，死亡惩罚不严重"
  },
  {
    title: "小飞船大冒险",
    year: "2024",
    category: "类塞尔达",
    imageUrl: new URL('@/assets/img/game/小飞船大冒险.jpg', import.meta.url).href,
    description: "除了有点偏贵，其他都很不错"
  },
  {
    title: "猎杀对决：1896",
    year: "2024",
    category: "类塔科夫",
    imageUrl: new URL('@/assets/img/game/猎杀对决：1896.jpg', import.meta.url).href,
    description: "西部奇幻FPS，手感很好，氛围很妙"
  },
  {
    title: "护核纪元",
    year: "2024",
    category: "沙盒",
    imageUrl: new URL('@/assets/img/game/护核纪元.jpg', import.meta.url).href,
    description: "麻雀虽小，五脏俱全。"
  },
  {
    title: "王座陨落",
    year: "2024",
    category: "独立佳作",
    imageUrl: new URL('@/assets/img/game/王座陨落.jpg', import.meta.url).href,
    description: "合理规划资源，思路大于手法。"
  },
  {
    title: "非生物因素",
    year: "2024",
    category: "线性生存",
    imageUrl: new URL('@/assets/img/game/非生物因素.jpg', import.meta.url).href,
    description: "scp"
  },
  {
    title: "燕云十六声",
    year: "2024",
    category: "MMORPG",
    imageUrl: new URL('@/assets/img/game/燕云十六声.jpg', import.meta.url).href,
    description: "因触犯律令，少侠已被判处笞刑，将于5年后刑满"
  },
  {
    title: "使命召唤：黑色行动6",
    year: "2024",
    category: "FPS",
    imageUrl: new URL('@/assets/img/game/使命召唤：黑色行动6.jpg', import.meta.url).href,
    description: "神中神，屎中屎"
  },
  {
    title: "TitanFall 2",
    year: "2016",
    category: "FPS",
    imageUrl: new URL('@/assets/img/game/TitanFall2.jpg', import.meta.url).href,
    description: "协议三 保护铁御"
  },
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
