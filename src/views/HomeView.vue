<script setup>
import Avatar from "@/components/index/Avatar.vue";
import { onMounted, ref } from "vue";
import Card from "@/components/index/Card.vue";
import DefaultBackground from "@/components/index/DefaultBackground.vue";


// 定义需要显示的文本
const titleText = "你唉牛魔";
const displayText = ref(""); // 用来存储当前显示的文本
const typingSpeed = 200; // 设置打字速度（每个字符之间的时间间隔，单位：毫秒）
const typingDelay = 1000; // 每次打字机效果完成后的延时，单位：毫秒
const eraseSpeed = 100; // 设置退回（删除字符）速度

// 打字机效果函数
const typeText = () => {
  let i = 0; // 当前显示的字符索引
  displayText.value = ""; // 重置文本，开始新的一轮

  // 打字效果
  const typingInterval = setInterval(() => {
    displayText.value += titleText.charAt(i); // 每次添加一个字符
    i++;
    if (i >= titleText.length) {
      clearInterval(typingInterval); // 完成打字效果后清除定时器
      setTimeout(eraseText, typingDelay); // 延时后开始退回效果
    }
  }, typingSpeed); // 每个字符之间的间隔时间

  // 退回（删除字符）效果
  const eraseText = () => {
    let j = titleText.length - 1; // 当前删除的字符索引
    const eraseInterval = setInterval(() => {
      displayText.value = displayText.value.slice(0, j); // 每次删除一个字符
      j--;
      if (j < 0) {
        clearInterval(eraseInterval); // 完成退回效果后清除定时器
        setTimeout(typeText, typingDelay); // 延时后重新开始打字
      }
    }, eraseSpeed); // 删除字符的间隔时间
  };
};

// 当组件挂载完成时，调用打字机效果函数
onMounted(() => {
  typeText();
});

// 定义 QQ 数组
const qqList = ['295935489', '2810731685', '1437818923', '3415246242',
  '1243895897', '1580860403', '2572896803', '395231835', '3010245422',
  '447735596', '1150987629', '3309884838', '875324468', '2698350024', '972054034',
  '3187729029', '1170591839', '1109484851', '1649730769', '1610529540', '2310019764', '473761795', '2354335053',
  '2397216368', '2142701038', '2055490018', '2837686630', '316766162'];
</script>

<template>
  <default-background>
    <div id="banner" style="height: 100vh">
      <h1 id="title">
        唉牛魔俱乐部
      </h1>
      <h2 id="subtitle">
        {{ displayText }}
      </h2>
    </div>
    <!-- 为 qqs 添加背景图的 div -->
    <div class="main-content">

      <Card :is-blur="true" class="main-card">
        <h1 style=" width: 100%; /* 确保占满整个父容器 */
  text-align: center; /* 居中对齐文本 */
  margin: 0; /* 去除默认的上下外边距 */
  padding: 10px 0; /* 给 h1 添加上下内边距 */
  font-size: 2rem; /* 调整字体大小 */
  font-weight: bold; /* 加粗字体 */">暗杀名单</h1>

        <!-- 使用 v-for 遍历 QQ 数组 -->
        <avatar v-for="(qq, index) in qqList" :key="index" :QQ="qq"/>
      </Card>

    </div>
  </default-background>


</template>

<style scoped>

#banner{
  position: relative;
}
#title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-130%);
  font-style: normal;
  font-weight: bold; /* 加粗 */
  color: white;
  font-size: 3rem;
  text-align: center;
  white-space: nowrap;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 阴影效果 */
}
#card{
  justify-content: center;
}
#subtitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: normal;
  font-weight: bold; /* 加粗 */
  color: white;
  font-size: 2rem;
  text-align: center;
  white-space: nowrap;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 阴影效果 */
}


/* 内容区域，确保可以滑动 */
.main-content {
  position: relative;
  z-index: 1;
  overflow-y: auto;
  height: 100%;
  padding: 20px;
  //background-color: transparent;
}
#qqs-container {
  position: relative; /* 添加一个新的容器，用来放置背景图 */
  height: auto; /* 根据内容的高度自适应 */

}



avatar {
  flex: 0 0 auto; /* 防止头像组件伸缩，保持其原有宽度 */
  width: 100px; /* 每个 avatar 的固定宽度 */
  height: 100px; /* 固定高度，根据需要调整 */
}
</style>
