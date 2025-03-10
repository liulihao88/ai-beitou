<template>
  <div>
    <div class="container" ref="containerRef"></div>
    <el-button type="primary" @click="addAi">添加ai</el-button>
  </div>
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

const addAi = () => {
  let node = {
    type: 'ai-chat-node',
    text: '与 AI 大模型进行对话',
    label: 'AI 对话',
    height: 340,
    properties: {
      stepName: 'AI 对话',
      config: {
        fields: [
          {
            label: 'AI 回答内容',
            value: 'answer',
          },
        ],
      },
    },
  }
  addNode(node)
}

const addNode = (shapeItem) => {
  lf.value.clearSelectElements()
  const { virtualRectCenterPositionX, virtualRectCenterPositionY } = lf.value.graphModel.getVirtualRectSize()
  const newNode = lf.value.graphModel.addNode({
    type: shapeItem.type,
    properties: shapeItem.properties,
    x: virtualRectCenterPositionX,
    y: virtualRectCenterPositionY - lf.value.graphModel.height / 2,
  })
  newNode.isSelected = true
  newNode.isHovered = true
  console.log(`24 newNode`, newNode)
  lf.value.toFront(newNode.id)
}
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(80vh);
}
</style>
