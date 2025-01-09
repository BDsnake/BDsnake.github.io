<script setup>
import { defineProps, ref } from 'vue';
import InfoCardWithBg from './InfoCardWithBg.vue'; // 引入 InfoCardWithBg 组件

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
  description:{
    type:String,
    required:true
  }
});

// 用于控制弹窗显示
const isModalVisible = ref(false);

// 打开弹窗
const openModal = () => {
  isModalVisible.value = true;
};

// 关闭弹窗
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <div class="card" @click="openModal">
    <div class="image-container">
      <img :src="props.imageUrl" alt="card image" class="card-image"/>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ props.title }}</h3>
      <div class="card-footer">
        <span class="card-category">{{ props.category }}</span>
        <span class="card-year">{{ props.year }}</span>
      </div>
    </div>
  </div>

  <!-- 弹窗内容 -->
  <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <InfoCardWithBg :bgImage="props.imageUrl" :title="props.title" :year="props.year" :category="props.category">
        <el-row style="height: 100%;width: 100%">
          <el-col :span="8" style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
            <div style="font-size: 50px; margin-bottom: 10px;">
              {{ props.title }}
            </div>
            <div style="font-size: 20px; color: #777;">
              {{ props.year }} ··· {{ props.category }}
            </div>
          </el-col>
          <!-- 竖线分隔符 -->
          <el-col :span="1" style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
          <div style="border-left: 2px dashed #ccc; height: 80%"></div>
          </el-col>
          <el-col :span="15" style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
            <div style="font-size: 30px; text-align: left; color: #333;">
              {{ props.description }}
            </div>
          </el-col>
        </el-row>
      </InfoCardWithBg>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  width: 100%;
  max-width: 320px; /* 限制最大宽度 */
  height: 380px; /* 高度可以根据需要调整 */
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  cursor: pointer; /* 增加点击效果 */
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
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-footer {
  display: flex;
  justify-content: space-between; /* 分类居左，年份居右 */
  font-size: 1.5rem;
  color: #777;
  width: 100%;
}

.card-category {
  text-align: left;
}

.card-year {
  text-align: right;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 80vw; /* 弹窗宽度为 80% 的视窗宽度 */
  height: 80vh; /* 弹窗高度为 80% 的视窗高度 */
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
}

.modal-content .card {
  height: 100%;
  width: 100%;
}

.modal-overlay:hover {
  //cursor: pointer;
}
</style>
