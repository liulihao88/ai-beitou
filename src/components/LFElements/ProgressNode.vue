<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const isTest38 = () => {
  console.log("isTest38");
}
</script>

<template>
  <div>
    <div>src/components/LFElements/ProgressNode.vue</div>
    <el-button type="danger" @click="isTest38">测试17</el-button>
  </div>
</template>
