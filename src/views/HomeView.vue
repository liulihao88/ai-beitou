<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import Header from '@/views/header.vue'
import { useRouter, useRoute } from 'vue-router'
import useStore from '@/stores'
import { TEST_ITEM } from '@/constants/index.ts'
import { ElMessage } from 'element-plus'

const { user } = useStore()

const router = useRouter()
const route = useRoute()

const { proxy } = getCurrentInstance()

const toWorkflow = () => {
  console.log(`32 TEST_ITEM.id`, TEST_ITEM.id);
  let row = router.push({
    path: `/application/${TEST_ITEM.id}/workflow`,
  })
}

const login = async () => {
  user.login('', 'admin', 'Akin78fbi!@#').then(() => {
    ElMessage.success('登录成功')
  })
}
</script>

<template>
  <div>
    <!-- <Header></Header> -->
    <!-- <g-base></g-base> -->
    <!-- <g-init></g-init> -->
    <!-- <g-7nodes></g-7nodes> -->
    <!-- <g-add-node></g-add-node> -->
    <!-- <g-vue></g-vue> -->
    <el-button @click="toWorkflow">去workflow</el-button>
    <el-button @click="login">登录</el-button>
  </div>
</template>
