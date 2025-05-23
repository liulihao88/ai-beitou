<template>
  <div
    v-if="
      (inputFieldList.length > 0 || (type === 'debug-ai-chat' && apiInputFieldList.length > 0)) &&
      type !== 'log'
    "
    class="mb-16"
    style="padding: 0 24px"
  >
    <el-card shadow="always" class="dialog-card" style="--el-card-padding: 16px 8px">
      <div class="flex align-center cursor w-full" style="padding: 0 8px;" @click="showUserInput = !showUserInput">
        <el-icon class="mr-8 arrow-icon" :class="showUserInput ? 'rotate-90' : ''"
          ><CaretRight
        /></el-icon>
        用户输入
      </div>
      <el-scrollbar max-height="160">
        <el-collapse-transition>
          <div v-show="showUserInput" class="mt-16" style="padding: 0 8px;">
            <DynamicsForm
              :key="dynamicsFormRefresh"
              v-model="form_data_context"
              :model="form_data_context"
              label-position="top"
              require-asterisk-position="right"
              :render_data="inputFieldList"
              ref="dynamicsFormRef"
            />
            <DynamicsForm
              v-if="type === 'debug-ai-chat'"
              v-model="api_form_data_context"
              :model="api_form_data_context"
              label-position="top"
              require-asterisk-position="right"
              :render_data="apiInputFieldList"
              ref="dynamicsFormRef2"
            />
          </div>
        </el-collapse-transition>
      </el-scrollbar>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import DynamicsForm from '@/components/dynamics-form/index.vue'
import type { FormField } from '@/components/dynamics-form/type'
import { useRoute } from 'vue-router'
import { MsgWarning } from '@/utils/message'
const route = useRoute()
const props = defineProps<{
  application: any
  type: 'log' | 'ai-chat' | 'debug-ai-chat'
  api_form_data: any
  form_data: any
}>()
// 用于刷新动态表单
const dynamicsFormRefresh = ref(0)
const inputFieldList = ref<FormField[]>([])
const apiInputFieldList = ref<FormField[]>([])
const showUserInput = ref(true)
const emit = defineEmits(['update:api_form_data', 'update:form_data'])

const api_form_data_context = computed({
  get: () => {
    return props.api_form_data
  },
  set: (data) => {
    emit('update:api_form_data', data)
  }
})

const form_data_context = computed({
  get: () => {
    return props.form_data
  },
  set: (data) => {
    emit('update:form_data', data)
  }
})

watch(
  () => props.application,
  () => {
    handleInputFieldList()
  }
)

function handleInputFieldList() {
  dynamicsFormRefresh.value++
  let default_value: any = {}
  props.application.work_flow?.nodes
    ?.filter((v: any) => v.id === 'base-node')
    .map((v: any) => {
      inputFieldList.value = v.properties.user_input_field_list
        ? v.properties.user_input_field_list.map((v: any) => {
            switch (v.type) {
              case 'input':
                return {
                  field: v.variable,
                  input_type: 'TextInput',
                  label: v.name,
                  default_value: default_value[v.variable],
                  required: v.is_required
                }
              case 'select':
                return {
                  field: v.variable,
                  input_type: 'SingleSelect',
                  label: v.name,
                  default_value: default_value[v.variable],
                  required: v.is_required,
                  option_list: v.optionList.map((o: any) => {
                    return { key: o, value: o }
                  })
                }
              case 'date':
                return {
                  field: v.variable,
                  input_type: 'DatePicker',
                  label: v.name,
                  default_value: default_value[v.variable],
                  required: v.is_required,
                  attrs: {
                    format: 'YYYY-MM-DD HH:mm:ss',
                    'value-format': 'YYYY-MM-DD HH:mm:ss',
                    type: 'datetime'
                  }
                }
              default:
                return v
            }
          })
        : v.properties.input_field_list
          ? v.properties.input_field_list
              .filter((v: any) => v.assignment_method === 'user_input')
              .map((v: any) => {
                switch (v.type) {
                  case 'input':
                    return {
                      field: v.variable,
                      input_type: 'TextInput',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required
                    }
                  case 'select':
                    return {
                      field: v.variable,
                      input_type: 'SingleSelect',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required,
                      option_list: v.optionList.map((o: any) => {
                        return { key: o, value: o }
                      })
                    }
                  case 'date':
                    return {
                      field: v.variable,
                      input_type: 'DatePicker',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required,
                      attrs: {
                        format: 'YYYY-MM-DD HH:mm:ss',
                        'value-format': 'YYYY-MM-DD HH:mm:ss',
                        type: 'datetime'
                      }
                    }
                  default:
                    break
                }
              })
          : []

      apiInputFieldList.value = v.properties.api_input_field_list
        ? v.properties.api_input_field_list.map((v: any) => {
            switch (v.type) {
              case 'input':
                return {
                  field: v.variable,
                  input_type: 'TextInput',
                  label: v.variable,
                  default_value: v.default_value || default_value[v.variable],
                  required: v.is_required
                }
              case 'select':
                return {
                  field: v.variable,
                  input_type: 'SingleSelect',
                  label: v.variable,
                  default_value: v.default_value || default_value[v.variable],
                  required: v.is_required,
                  option_list: v.optionList.map((o: any) => {
                    return { key: o, value: o }
                  })
                }
              case 'date':
                return {
                  field: v.variable,
                  input_type: 'DatePicker',
                  label: v.variable,
                  default_value: v.default_value || default_value[v.variable],
                  required: v.is_required,
                  attrs: {
                    format: 'YYYY-MM-DD HH:mm:ss',
                    'value-format': 'YYYY-MM-DD HH:mm:ss',
                    type: 'datetime'
                  }
                }
              default:
                break
            }
          })
        : v.properties.input_field_list
          ? v.properties.input_field_list
              .filter((v: any) => v.assignment_method === 'api_input')
              .map((v: any) => {
                switch (v.type) {
                  case 'input':
                    return {
                      field: v.variable,
                      input_type: 'TextInput',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required
                    }
                  case 'select':
                    return {
                      field: v.variable,
                      input_type: 'SingleSelect',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required,
                      option_list: v.optionList.map((o: any) => {
                        return { key: o, value: o }
                      })
                    }
                  case 'date':
                    return {
                      field: v.variable,
                      input_type: 'DatePicker',
                      label: v.name,
                      default_value: default_value[v.variable],
                      required: v.is_required,
                      attrs: {
                        format: 'YYYY-MM-DD HH:mm:ss',
                        'value-format': 'YYYY-MM-DD HH:mm:ss',
                        type: 'datetime'
                      }
                    }
                  default:
                    break
                }
              })
          : []
    })
}
/**
 * 校验参数
 */
const checkInputParam = () => {
  // 检查inputFieldList是否有未填写的字段
  for (let i = 0; i < inputFieldList.value.length; i++) {
    if (
      inputFieldList.value[i].required &&
      !form_data_context.value[inputFieldList.value[i].field]
    ) {
      MsgWarning('请填写所有必填字段')
      return false
    }
  }
  // 浏览器query参数找到接口传参
  let msg = []
  for (let f of apiInputFieldList.value) {
    if (!api_form_data_context.value[f.field]) {
      api_form_data_context.value[f.field] = route.query[f.field]
    }
    if (f.required && !api_form_data_context.value[f.field]) {
      msg.push(f.field)
    }
  }
  if (msg.length > 0) {
    MsgWarning(`请在URL中填写参数 ${msg.join('、')}的值`)
    return false
  }
  return true
}
defineExpose({ checkInputParam })
onMounted(() => {
  handleInputFieldList()
})
</script>
<style lang="scss" scoped></style>
