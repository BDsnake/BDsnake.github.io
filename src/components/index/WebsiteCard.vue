<template>
  <el-card class="site-card">
      <el-row style="width: 100%;height: 65px">
        <el-col :span="4">
          <el-image :src="image" alt="网站图片" class="site-image">
            <template #error>
              <div class="image-slot">
                <el-image :src="defaultImage" class="site-image"/>
              </div>
            </template>
          </el-image>
        </el-col>
        <el-col :span="20">
            <h3 id="title" style="margin-left: 10px">
              <span>
                {{ title }}
                <el-popover
                    placement="top-start"
                    title="需要魔法"
                    :width="200"
                    trigger="hover"
                    content="need magic"
                >
            <template #reference>
              <span class="magic-icon" v-if="requiresMagic">🪄</span>
            </template>
          </el-popover>
              </span>
            </h3>
        </el-col>
      </el-row>
    <p style="text-align: left;margin-left: 10px">{{ description }}</p>
    <el-button style="margin-bottom: 10px;margin-top:10px;width: 100%" type="primary" @click="handleClick">访问站点</el-button>
  </el-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const defaultImage = new URL('@/assets/img/default-website.png', import.meta.url).href;
// 解构 props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  requiresMagic: {
    type: Boolean,
    default: false,
  },
});

// 定义 emits
const emit = defineEmits(['visit']);

// 方法
const handleClick = () => {
  emit('visit', props.url);
};
</script>

<style scoped>
.el-col{
  position: relative;
}
#title{
  text-align: left;
}
.site-card {
  position: relative;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer; /* 增加点击效果 */
}
.site-image:hover{
  transition: transform 0.3s ease; /* 平滑过渡 */
  transform: scale(1.1); /* 鼠标悬停时放大1.2倍 */
}
.el-card__body{
  padding: 0
}
.card-header {
  align-items: center;
  margin-bottom: 10px;
}
.site-image {
  //width: 100%;
  width: 50px;  /* 你可以设置为适合的宽度 */
  height: 50px;  /* 你可以设置为适合的高度 */
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);  /* 移动元素自身的宽高一半 */
}
.magic-icon {
  color: red;
  font-size: 16px;
}
</style>
