<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
  width: {
    type: Number,
  },
})
const isTest38 = () => {
  console.log('isTest38')
}
</script>

<template>
  <div class="andy-box">
    <div>src/components/LFElements/ProgressNode.vue</div>
    {{ width }}
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试17</el-button>
      这是一段vue111
    </div>
    <div>
      <el-button type="danger" @click="isTest38">测试18</el-button>
      这是一段vue111
    </div>
  </div>
</template>

<style lang="scss" scoped>
.andy-box {
  height: 100%;
  width: 100%;
  // background: #fff;
  border: 1px solid #e6f7ff;
  box-sizing: border-box;
  padding: 10px 10px 10px 6px;
  border-radius: 8px;
  cursor: pointer;
  overflow: scroll;
}
</style>
