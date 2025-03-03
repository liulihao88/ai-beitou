<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

const form = ref({})
const rules = {

}

let itemArr = [{
  id: '101',
  propName: 'datasetIds', //输入项 name
  propCname: '选择知识库', // 输入项 lable
  readonly: 0, // 是否只读 0:否 1：是
  inputType: 'list', //输入项类型 list：下拉框
  inputParamType: 'url', // 输入项类型 url：api接口 comp_input：组件输入
  inputParam: '/datasetList', // 当为url时，为url接口地址
  defaultVal: null, //默认值
  sort: 1, //序号
  propExplain: '选择对于的知识库', //气泡提示信息
  mustInput: 1, //是否必填 0:非必填 1:必填
  maxLength: null, //最大值
  minLength: null, //最小值
}]
</script>

<template>
  <div>
    <el-form ref="formRef" :model="form" :rules="rules">
      <div v-for="(v,i) in itemArr" :key="i">
        <div>{{v}}</div>
      </div>
      <el-form-item label="名称" prop="name">
        <o-input v-model="form.name" />
      </el-form-item>
    </el-form>
  </div>
</template>
