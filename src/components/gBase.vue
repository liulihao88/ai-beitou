<template>
  <div class="container" ref="container"></div>
</template>

<script>
import LogicFlow from '@logicflow/core'
import '@logicflow/core/lib/style/index.css'
// import "@logicflow/core/dist/style/index.css"; // 2.0版本前的引入方式

export default {
  data() {
    return {
      data: {
        // 节点
        nodes: [
          {
            id: '21',
            type: 'rect',
            x: 100,
            y: 200,
            text: 'rect node',
          },
          {
            id: '50',
            type: 'circle',
            x: 300,
            y: 400,
            text: 'circle node',
          },
        ],
        // 边
        edges: [
          {
            type: 'polyline',
            sourceNodeId: '50',
            targetNodeId: '21',
          },
        ],
      },
    }
  },
  mounted() {
    this.lf = new LogicFlow({
      container: this.$refs.container,
      grid: true,
    })
    this.lf.render(this.data)
  },
}
</script>

<style scoped>
.container {
  width: 1000px;
  height: 500px;
}
</style>
