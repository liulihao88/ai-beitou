<template>
  <NodeContainer :nodeModel="nodeModel">
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
    <div>
      我是个好人你信吗
    </div>
  </NodeContainer>
</template>
<script setup lang="ts">
import { set } from 'lodash'
import NodeContainer from '@/workflow/common/NodeContainer.vue'
import { ref, computed, onMounted } from 'vue'
import { isLastNode } from '@/workflow/common/data'

const props = defineProps<{ nodeModel: any }>()


const form = {
  reply_type: 'content',
  content: '',
  fields: [],
  is_result: false,
}


const replyNodeFormRef = ref()
const nodeCascaderRef = ref()
const validate = () => {
  return Promise.all([
    nodeCascaderRef.value ? nodeCascaderRef.value.validate() : Promise.resolve(''),
    replyNodeFormRef.value?.validate(),
  ]).catch((err: any) => {
    return Promise.reject({ node: props.nodeModel, errMessage: err })
  })
}

onMounted(() => {
  if (typeof props.nodeModel.properties.node_data?.is_result === 'undefined') {
    if (isLastNode(props.nodeModel)) {
      set(props.nodeModel.properties.node_data, 'is_result', true)
    }
  }

  set(props.nodeModel, 'validate', validate)
})
</script>
<style lang="scss" scoped></style>
