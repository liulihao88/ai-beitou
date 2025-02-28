<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const save = async () => {}
const add = () => {
  console.log(`1158 8行 header.vue add `, add)
}
</script>

<template>
  <div class="header-box">
    <div>左侧</div>
    <div>
      <el-button type="primary" @click="add">添加组件</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-box {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
