<template>
  <el-form-item>
    <template #label>
      <div class="flex-between">
        选项值
        <el-button link type="primary" @click.stop="addOption()">
          <el-icon class="mr-4">
            <Plus />
          </el-icon>
          添加
        </el-button>
      </div>
    </template>

    <el-row style="width: 100%" :gutter="10">
      <el-col :span="10"
        ><div class="grid-content ep-bg-purple" />
        标签</el-col
      >
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple" />
        选项值</el-col
      >
    </el-row>
    <el-row
      style="width: 100%"
      v-for="(option, $index) in formValue.option_list"
      :key="$index"
      :gutter="10"
      class="mb-8"
    >
      <el-col :span="10"
        ><div class="grid-content ep-bg-purple" />
        <el-input v-model="formValue.option_list[$index].label" placeholder="请输入选项标签"
      /></el-col>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple" />
        <el-input v-model="formValue.option_list[$index].value" placeholder="请输入选项值"
      /></el-col>
      <el-col :span="1"
        ><div class="grid-content ep-bg-purple" />
        <el-button link class="ml-8" @click.stop="delOption($index)">
          <el-icon>
            <Delete />
          </el-icon> </el-button
      ></el-col>
    </el-row>
  </el-form-item>
  <el-form-item
    class="defaultValueItem"
    label="默认值"
    :required="formValue.required"
    prop="default_value"
    :rules="formValue.required ? [{ required: true, message: '默认值 为必填属性' }] : []"
  >
    <div class="defaultValueCheckbox">
      <el-checkbox v-model="formValue.show_default_value" label="显示默认值" />
    </div>
    <RadioCard
      :form-field="formField"
      v-model="formValue.default_value"
      :other-params="{}"
      field="default_value"
    >
    </RadioCard>
  </el-form-item>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import RadioCard from '@/components/dynamics-form/items/radio/RadioCard.vue'
const props = defineProps<{
  modelValue: any
}>()
const emit = defineEmits(['update:modelValue'])
const formValue = computed({
  set: (item) => {
    emit('update:modelValue', item)
  },
  get: () => {
    return props.modelValue
  }
})

const addOption = () => {
  formValue.value.option_list.push({ value: '', label: '' })
}

const delOption = (index: number) => {
  const option = formValue.value.option_list[index]
  if (option.value && formValue.value.default_value == option.value) {
    formValue.value.default_value = ''
  }
  formValue.value.option_list.splice(index, 1)
}
const formField = computed(() => {
  return { field: '', ...getData() }
})
const getData = () => {
  return {
    input_type: 'RadioCard',
    attrs: {},
    default_value: formValue.value.default_value,
    show_default_value: formValue.value.show_default_value,
    text_field: 'label',
    value_field: 'value',
    option_list: formValue.value.option_list
  }
}
const rander = (form_data: any) => {
  formValue.value.option_list = form_data.option_list || []
  formValue.value.default_value = form_data.default_value
}

defineExpose({ getData, rander })
onMounted(() => {
  formValue.value.option_list = []
  formValue.value.default_value = ''
  if (formValue.value.show_default_value === undefined) {
    formValue.value.show_default_value = true
  }
  addOption()
})
</script>
<style lang="scss" scoped>
.defaultValueItem {
  position: relative;
  .defaultValueCheckbox {
    position: absolute;
    right: 0;
    top: -35px;
  }
}
:deep(.el-form-item__label) {
  display: block;
}

:deep(.el-select-dropdown) {
  max-width: 400px;
}
</style>
