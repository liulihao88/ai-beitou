<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/es/index.css'
const { proxy } = getCurrentInstance()

const SilentConfig = {
  isSilentMode: true, // 仅浏览不可编辑
  stopScrollGraph: true, // 禁止鼠标滚动移动画布
  stopMoveGraph: true, // 禁止拖动画布
  stopZoomGraph: true, // 禁止缩放画布
  adjustNodePosition: true, // 允许拖动节点
}

const containerRef = ref()

const data = {
  nodes: [
    {
      id: '1',
      type: 'rect',
      x: 100,
      y: 60,
      text: '矩形',
    },
    {
      id: '2',
      type: 'circle',
      x: 300,
      y: 60,
      text: '圆形',
    },
    {
      id: '3',
      type: 'ellipse',
      x: 500,
      y: 60,
      text: '椭圆',
    },
    {
      id: '4',
      type: 'polygon',
      x: 100,
      y: 200,
      text: '多边形',
    },
    {
      id: '5',
      type: 'diamond',
      x: 300,
      y: 200,
      text: '菱形',
    },
    {
      id: '6',
      type: 'text',
      x: 500,
      y: 200,
      text: '纯文本节点',
    },
    {
      id: '7',
      type: 'html',
      x: 100,
      y: 320,
      text: 'html节点',
    },
  ],
}

const styleConfig: Partial<LogicFlow.Options> = {
  style: {
    rect: {
      rx: 5,
      ry: 5,
      strokeWidth: 2,
    },
    circle: {
      fill: '#f5f5f5',
      stroke: '#666',
    },
    ellipse: {
      fill: '#dae8fc',
      stroke: '#6c8ebf',
    },
    polygon: {
      fill: '#d5e8d4',
      stroke: '#82b366',
    },
    diamond: {
      fill: '#ffe6cc',
      stroke: '#d79b00',
    },
    text: {
      color: '#b85450',
      fontSize: 12,
    },
  },
}

onMounted(() => {
  const lf = new LogicFlow({
    container: containerRef.value,
    grid: true,
    ...SilentConfig,
    ...styleConfig,
  })

  lf.render(data)
  lf.translateCenter()
})
</script>

<template>
  <div className="helloworld-app">
    <div className="app-content" ref="containerRef" />
  </div>
</template>

<style lang="scss" scoped>
.helloworld-app {
  width: 100%;

  .app-content {
    height: calc(100vh);
  }
}

.viewport {
  position: relative;
  height: 80vh;
  overflow: hidden;
}
</style>
