<template>
  <NodeContainer :nodeModel="nodeModel">
    <div>
      <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="选择知识库" prop="datasetIds">
          <el-input v-model="form.datasetIds" />
        </el-form-item>
        <el-form-item label="检索模式" prop="searchMode">
          <el-input v-model="form.searchMode" />
        </el-form-item>
        <el-form-item label="相似度高于" prop="similarity">
          <el-input-number :precision="1" v-model="form.similarity" />
        </el-form-item>
        <el-form-item label="引用分段Top" prop="topN">
          <el-input v-model="form.topN" />
        </el-form-item>
        <el-form-item label="最大引用字符数" prop="maxParagraphCharNumber">
          <el-input-number v-model="form.maxParagraphCharNumber" />
        </el-form-item>
        <el-form-item label="检索问题" prop="question">
          <el-input v-model="form.question" />
        </el-form-item>
      </el-form>
    </div>
  </NodeContainer>
</template>
<script setup lang="ts">
import { set } from 'lodash'
import NodeContainer from '@/workflow/common/NodeContainer.vue'
import { ref, computed, onMounted } from 'vue'
import { isLastNode } from '@/workflow/common/data'

const props = defineProps<{ nodeModel: any }>()

const form = ref({
  datasetIds: '默认值1',
  searchMode: 'embedding',
  similarity: 0.6,
  topN: '3',
  maxParagraphCharNumber: '5000',
})
const rules = {
  datasetIds: [{ required: true, message: '请输入', trigger: 'blur' }],
  searchMode: [{ required: true, message: '请输入', trigger: 'blur' }],
  similarity: [{ required: true, message: '请输入', trigger: 'blur' }],
  topN: [{ required: true, message: '请输入', trigger: 'blur' }],
  maxParagraphCharNumber: [{ required: true, message: '请输入', trigger: 'blur' }],
  question: [{ required: true, message: '请输入', trigger: 'blur' }],
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
