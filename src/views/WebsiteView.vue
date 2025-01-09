<script setup>
import DefaultBackground from "@/components/index/DefaultBackground.vue";
import Card from "@/components/index/Card.vue";
import ImageCard from "@/components/index/ImageCard.vue";
import WebsiteCard from "@/components/index/WebsiteCard.vue";
import {computed, ref} from "vue";
// 定义多个 ImageCard 的数据
const categoryTitleImg = new URL('@/assets/logo/边牧.png', import.meta.url).href;
// 站点数据
const sites = ref([
  {
    title: '谷歌',
    description: '全球最大的搜索引擎',
    url: 'https://www.google.com',
    requiresMagic: true,
    category: "search"
  },
  {
    title: 'GitHub',
    description: '代码托管平台',
    url: 'https://github.com',
    requiresMagic: false,
    category: "其他"
  },
  {
    title:'樱花动漫',
    description: '优秀的动漫BT资源网',
    url:'https://share.dmhy.org/',
    requiresMagic: true,
    category: "影视"
  },
  {
    title:'VidHub',
    description: '免费在线视频网站',
    url:'https://vidhub3.top/',
    requiresMagic: false,
    category: "影视"
  }
  // 更多站点...
]);

// 站点分类
const categories = ref([
  { name: "其他", order: 2 },  // 分类顺序
  { name: "影视", order: 1 },
]);

// 根据分类的 order 排序分类
const sortedCategories = computed(() => {
  return [...categories.value].sort((a, b) => a.order - b.order);
});


// 根据分类获取站点并排序
const sortedSites = computed(() => {
  const grouped = {};
  sortedCategories.value.forEach((category) => {
    grouped[category.name] = sites.value
        .filter((site) => site.category === category.name)
        .sort((a, b) => a.order - b.order);
  });
  return grouped;
});

// 方法
const getSiteImage = (url) => {
  const domain = new URL(url).hostname;
  return `https://logo.clearbit.com/${domain}`;
};


const goToSite = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <default-background>
    <div class="website-list">
        <!-- 使用 v-for 循环渲染多个 ImageCard -->
        <div v-for="category in sortedCategories" :key="category.name" class="category-section">
          <h2 style="text-align: left; display: flex; align-items: center;">
            <el-image style="width: 28px; margin-right: 8px" :src="categoryTitleImg"/>
            <span style="color: #eee">
              {{ category.name }}
            </span>
          </h2>
        <el-row :gutter="20" style="width: 100%;">
          <el-col :span="8" v-for="site in sortedSites[category.name]" :key=site.url>
            <website-card
                :title="site.title"
                :description="site.description"
                :image="getSiteImage(site.url)"
                :url="site.url"
                :requiresMagic="site.requiresMagic"
                @visit="goToSite"
            />
          </el-col>
        </el-row>
        </div>
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
.website-list {
  padding: 0 20%;
  height: 100vh;
  padding-top: 100px;
}
</style>
