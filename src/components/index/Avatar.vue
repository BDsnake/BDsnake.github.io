<script setup>

import {get} from "@/request.js";
import {onMounted, ref} from "vue";

const props = defineProps({
  QQ:{type:String,required:true}
})

const nickname = ref("");

const avaUrl = ref("http://q.qlogo.cn/headimg_dl?dst_uin="+props.QQ+"&spec=640&img_type=jpg");

onMounted(() => {
  console.log('组件已挂载')
  getNickname();
})
const getNickname = async()=>{
  var response = await get("/qName/qqname?qq="+props.QQ,null,null)

  console.log(response)
  var data = response.data.data


  nickname.value = nickname.value = data["name"]||"请输入昵称";

  console.log("nickname:"+nickname); // 输出：BDsnake
}

</script>

<template>
  <div class="avatar-container">
    <el-avatar :size="50" :src=avaUrl />
    <el-text :size="'large'">{{nickname}}</el-text>
  </div>

</template>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center;    /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 100px;
}

.el-avatar {
  margin-bottom: 8px; /* 图片和文字之间的间距 */
  transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
}

.el-avatar:hover {
  transform: rotate(360deg); /* 鼠标悬停时旋转360度 */
}
</style>