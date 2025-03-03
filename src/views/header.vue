<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import DropdownMenu from '@/views/DropdownMenu.vue'

import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance()
const showPopover = ref(false)
const {
  params: { id },
} = route

const save = async () => {}
function clickoutside() {
  showPopover.value = false
}
function clickNodes(item: any) {
  // workflowRef.value?.addNode(item)
  showPopover.value = false
}
function onmousedown(item: any) {
  // workflowRef.value?.onmousedown(item)
  showPopover.value = false
}

</script>

<template>
  <div class="header-box">
    <div>左侧</div>
    <div>
      <el-button type="primary" @click="showPopover = !showPopover">添加组件</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>

    <el-collapse-transition>
      <DropdownMenu
        :show="showPopover"
        :id="id"
        v-click-outside="clickNodes"
        @clickNodes="clickNodes"
        @onmousedown="onmousedown"
      />
    </el-collapse-transition>
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
