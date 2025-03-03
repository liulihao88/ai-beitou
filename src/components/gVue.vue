<template>
  <div ref="containerRef" id="graph" class="viewport"></div>
  <TeleportContainer :flow-id="flowId" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { forEach, map, has } from 'lodash-es'
import LogicFlow, { ElementState, LogicFlowUtil } from '@logicflow/core'
import { register, getTeleport } from '@logicflow/vue-node-registry'
import '@logicflow/core/es/index.css'

import ProgressNode from '@/components/LFElements/ProgressNode.vue'

const lfRef = ref<LogicFlow | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const TeleportContainer = getTeleport()
const flowId = ref('')

onMounted(() => {
  if (containerRef.value) {
    const lf = new LogicFlow({
      container: containerRef.value,
      grid: true,
    })

    // 注册自定义 vue 节点
    register(
      {
        type: 'custom-vue-node',
        component: ProgressNode,
      },
      lf,
    )

    lf.on('graph:rendered', ({ graphModel }) => {
      flowId.value = graphModel.flowId!
    })

    // 注册事件
    lf.render({})

    const node1 = lf.addNode({
      id: 'vue-node-1',
      type: 'custom-vue-node',
      x: 80,
      y: 80,
      properties: {
        progress: 60,
        width: 80,
        height: 80,
      },
    })
    console.log('node1 --->>>', node1)

    const node2 = lf.addNode({
      id: 'vue-node-2',
      type: 'custom-vue-node',
      x: 360,
      y: 80,
      properties: {
        progress: 60,
        width: 80,
        height: 80,
      },
    })

    setInterval(() => {
      const { properties } = node2.getData()
      console.log('properties.progress --->>>', properties?.progress)
      if (has(properties, 'progress')) {
        const progress = properties?.progress
        node2.setProperty('progress', (progress + 10) % 100)
      }
    }, 2000)
  }
})
</script>

<style lang="scss" scoped>
.viewport {
  width: 100wh;
  height: 100vh;
}
</style>
