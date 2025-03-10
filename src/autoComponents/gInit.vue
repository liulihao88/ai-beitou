<template>
  <div class="container" ref="containerRef"></div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import '@logicflow/core/lib/style/index.css'
import { ref, onMounted } from 'vue'

const lf = ref({})
const containerRef = ref(null)

onMounted(() => {
  lf.value = new LogicFlow({
    container: containerRef.value,
    grid: true,
  })
  lf.value.render()
})
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh);
}
</style>
