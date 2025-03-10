<template>
  <el-button type="primary" @click="isTest02">测试87</el-button>
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
const lf = ref()

onMounted(() => {
  if (containerRef.value) {
    lf.value = new LogicFlow({
      container: containerRef.value,
      textEdit: false,
      adjustEdge: false,
      adjustEdgeStartAndEnd: false,
      background: {
        background: 'lightblue',
        color: 'red',
      },
      // properties: {
      //   style: {
      //     fill: 'red',
      //   },
      // },
      // grid: {
      //   size: 10,
      //   type: 'dot',
      //   config: {
      //     color: '#DEE0E3',
      //     thickness: 1,
      //   },
      // },
      // keyboard: {
      //   enabled: true,
      // },
      // isSilentMode: false,
    })

    // 注册自定义 vue 节点
    register(
      {
        type: 'custom-vue-node',
        component: ProgressNode,
      },
      lf.value,
    )

    lf.value.on('graph:rendered', ({ graphModel }) => {
      console.log(`65 graphModel`, graphModel)
      flowId.value = graphModel.flowId!
      console.log(`73 flowId.value`, flowId.value)
    })

    // 注册事件
    lf.value.render({})

    const node2 = lf.value.addNode({
      type: 'custom-vue-node',
      x: 360,
      background: {
        color: 'blue',
        fill: '#f5f5f5',
        stroke: '#666',
      },
      fill: 'blue',
      y: 380,
      properties: {
        width: 280,
        height: 200,
        backgroundColor: '#5c6bc0', // 自定义背景色
        textColor: 'white', // 自定义文字颜色
        size: 111,
        background: {
          color: 'blue',
          fill: '#f5f5f5',
          stroke: '#666',
        },
        grid: {
          size: 10,
          visible: false,
        },
        keyboard: {
          enabled: true,
        },
        style: {
          background: {
            color: 'blue',
            fill: '#f5f5f5',
            stroke: '#666',
          },
          fill: '#000000',
          grid: {
            size: 10,
            visible: false,
          },
          keyboard: {
            enabled: true,
          },
          'custom-vue-node': {
            fill: '#f5f5f5',
            stroke: '#666',
          },
        },
      },
    })
  }
})
const isTest02 = () => {
  lf.value.addNode({
    id: 'vue-node-3',
    type: 'custom-vue-node',
    x: 860,
    fill: 'red',
    y: 180,
  })
}
</script>

<style lang="scss" scoped>
.viewport {
  width: 100wh;
  height: 100vh;
}
</style>
