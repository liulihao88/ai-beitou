import { Result } from '@/request/Result'
import { get, post, postStream, del, put, request, download, exportFile } from '@/request/index'
import type { pageRequest } from '@/api/type/common'
import type { ApplicationFormType } from '@/api/type/application'
import { type Ref } from 'vue'
import type { FormField } from '@/components/dynamics-form/type'

const prefix = '/application'

/**
 * 获取全部应用
 * @param 参数
 */
const getAllAppilcation: () => Promise<Result<any[]>> = () => {
  return get(`${prefix}`)
}

/**
 * 获取分页应用
 * page {
 "current_page": "string",
 "page_size": "string",
 }
 * param {
 "name": "string",
 }
 */
const getApplication: (page: pageRequest, param: any, loading?: Ref<boolean>) => Promise<Result<any>> = (
  page,
  param,
  loading,
) => {
  return get(`${prefix}/${page.current_page}/${page.page_size}`, param, loading)
}

/**
 * 创建应用
 * @param 参数
 */
const postApplication: (data: ApplicationFormType, loading?: Ref<boolean>) => Promise<Result<any>> = (
  data,
  loading,
) => {
  return post(`${prefix}`, data, undefined, loading)
}

/**
 * 修改应用
 * @param 参数
 */
const putApplication: (
  application_id: String,
  data: ApplicationFormType,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, data, loading) => {
  return put(`${prefix}/${application_id}`, data, undefined, loading)
}

/**
 * 删除应用
 * @param 参数 application_id
 */
const delApplication: (application_id: String, loading?: Ref<boolean>) => Promise<Result<boolean>> = (
  application_id,
  loading,
) => {
  return del(`${prefix}/${application_id}`, undefined, {}, loading)
}

/**
 * 应用详情
 * @param 参数 application_id
 */
const getApplicationDetail: (application_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  // return Promise.resolve({
  //   code: 200,
  //   message: '成功',
  //   data: {
  //     id: 'e6cf6fdc-86d0-11ef-a942-0242ac190002',
  //     create_time: '2024-10-10T14:28:45.546439',
  //     update_time: '2025-02-28T16:29:29.168352',
  //     name: 'test01',
  //     desc: '',
  //     prologue:
  //       '您好，我是开发小助手，您可以向我提出MaxKB使用问题。\n- MaxKB如何安装？\n- 如何收费？\n- 收费版功能差异',
  //     dialogue_number: 0,
  //     dataset_setting: {
  //       search_mode: 'embedding',
  //       no_references_setting: {
  //         status: 'ai_questioning',
  //         value: '{question}',
  //       },
  //     },
  //     model_setting: {},
  //     model_params_setting: {},
  //     tts_model_params_setting: {},
  //     problem_optimization: false,
  //     icon: '/ui/favicon.ico',
  //     work_flow: {
  //       edges: [
  //         {
  //           id: '7d0f166f-c472-41b2-b9a2-c294f4c83d73',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 540,
  //             y: 3190,
  //           },
  //           pointsList: [
  //             {
  //               x: 350,
  //               y: 3090,
  //             },
  //             {
  //               x: 460,
  //               y: 3090,
  //             },
  //             {
  //               x: 430,
  //               y: 3190,
  //             },
  //             {
  //               x: 540,
  //               y: 3190,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 350,
  //             y: 3090,
  //           },
  //           sourceNodeId: 'start-node',
  //           targetNodeId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           sourceAnchorId: 'start-node_right',
  //           targetAnchorId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5_left',
  //         },
  //         {
  //           id: '35cb86dd-f328-429e-a973-12fd7218b696',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1050,
  //             y: 3212,
  //           },
  //           pointsList: [
  //             {
  //               x: 860,
  //               y: 3190,
  //             },
  //             {
  //               x: 970,
  //               y: 3190,
  //             },
  //             {
  //               x: 940,
  //               y: 3212,
  //             },
  //             {
  //               x: 1050,
  //               y: 3212,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 860,
  //             y: 3190,
  //           },
  //           sourceNodeId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           targetNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           sourceAnchorId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5_right',
  //           targetAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_left',
  //         },
  //         {
  //           id: 'e8f6cfe6-7e48-41cd-abd3-abfb5304d0d8',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 2960,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3049.6175,
  //             },
  //             {
  //               x: 1740,
  //               y: 3049.6175,
  //             },
  //             {
  //               x: 1630,
  //               y: 2960,
  //             },
  //             {
  //               x: 1740,
  //               y: 2960,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3049.6175,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: '4ffe1086-25df-4c85-b168-979b5bbf0a26',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_1009_right',
  //           targetAnchorId: '4ffe1086-25df-4c85-b168-979b5bbf0a26_left',
  //         },
  //         {
  //           id: '994ff325-6f7a-4ebc-b61b-10e15519d6d2',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 3550,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3205.0004999999996,
  //             },
  //             {
  //               x: 1740,
  //               y: 3205.0004999999996,
  //             },
  //             {
  //               x: 1630,
  //               y: 3550,
  //             },
  //             {
  //               x: 1740,
  //               y: 3550,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3205.0004999999996,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_4908_right',
  //           targetAnchorId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb_left',
  //         },
  //         {
  //           id: '19270caf-bb9f-4ba7-9bf8-200aa70fecd5',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 4380,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3321.692,
  //             },
  //             {
  //               x: 1740,
  //               y: 3321.692,
  //             },
  //             {
  //               x: 1630,
  //               y: 4380,
  //             },
  //             {
  //               x: 1740,
  //               y: 4380,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3321.692,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_161_right',
  //           targetAnchorId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7_left',
  //         },
  //         {
  //           id: '7e355796-290f-4d49-b66c-c8881bad3149',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 2240,
  //             y: 4362,
  //           },
  //           pointsList: [
  //             {
  //               x: 2060,
  //               y: 4380,
  //             },
  //             {
  //               x: 2170,
  //               y: 4380,
  //             },
  //             {
  //               x: 2130,
  //               y: 4362,
  //             },
  //             {
  //               x: 2240,
  //               y: 4362,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 2060,
  //             y: 4380,
  //           },
  //           sourceNodeId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           targetNodeId: '5363a609-d1f8-43cf-be5f-6409dfa78fd4',
  //           sourceAnchorId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7_right',
  //           targetAnchorId: '5363a609-d1f8-43cf-be5f-6409dfa78fd4_left',
  //         },
  //         {
  //           id: 'ba38c274-0d5d-4079-8621-a19326223efc',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 2140,
  //             y: 3562,
  //           },
  //           pointsList: [
  //             {
  //               x: 2060,
  //               y: 3550,
  //             },
  //             {
  //               x: 2170,
  //               y: 3550,
  //             },
  //             {
  //               x: 2030,
  //               y: 3562,
  //             },
  //             {
  //               x: 2140,
  //               y: 3562,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 2060,
  //             y: 3550,
  //           },
  //           sourceNodeId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           targetNodeId: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3',
  //           sourceAnchorId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb_right',
  //           targetAnchorId: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3_left',
  //         },
  //       ],
  //       nodes: [
  //         {
  //           x: -350,
  //           y: 2950,
  //           id: 'base-node',
  //           type: 'base-node',
  //           properties: {
  //             config: {},
  //             height: 727,
  //             showNode: true,
  //             stepName: '基本信息',
  //             node_data: {
  //               desc: '',
  //               name: 'test01',
  //               prologue:
  //                 '您好，我是开发小助手，您可以向我提出MaxKB使用问题。\n- MaxKB如何安装？\n- 如何收费？\n- 收费版功能差异',
  //               tts_type: 'BROWSER',
  //               stt_model_enable: false,
  //               tts_model_enable: false,
  //             },
  //             input_field_list: [],
  //             api_input_field_list: [],
  //             user_input_field_list: [],
  //           },
  //         },
  //         {
  //           x: 190,
  //           y: 3090,
  //           id: 'start-node',
  //           type: 'start-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '用户问题',
  //                   value: 'question',
  //                 },
  //               ],
  //               globalFields: [
  //                 {
  //                   label: '当前时间',
  //                   value: 'time',
  //                 },
  //                 {
  //                   label: '历史聊天记录',
  //                   value: 'history_context',
  //                 },
  //                 {
  //                   label: '对话id',
  //                   value: 'chat_id',
  //                 },
  //               ],
  //             },
  //             fields: [
  //               {
  //                 label: '用户问题',
  //                 value: 'question',
  //               },
  //             ],
  //             height: 364,
  //             showNode: true,
  //             stepName: '开始',
  //             globalFields: [
  //               {
  //                 label: '当前时间',
  //                 value: 'time',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 700,
  //           y: 3190,
  //           id: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           type: 'search-dataset-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '检索结果的分段列表',
  //                   value: 'paragraph_list',
  //                 },
  //                 {
  //                   label: '满足直接回答的分段列表',
  //                   value: 'is_hit_handling_method_list',
  //                 },
  //                 {
  //                   label: '检索结果',
  //                   value: 'data',
  //                 },
  //                 {
  //                   label: '满足直接回答的分段内容',
  //                   value: 'directly_return',
  //                 },
  //               ],
  //             },
  //             height: 794,
  //             showNode: true,
  //             stepName: '知识库检索',
  //             condition: 'AND',
  //             node_data: {
  //               dataset_id_list: [],
  //               dataset_setting: {
  //                 top_n: 3,
  //                 similarity: 0.6,
  //                 search_mode: 'embedding',
  //                 max_paragraph_char_number: 5000,
  //               },
  //               source_dataset_id_list: [],
  //               question_reference_address: ['start-node', 'question'],
  //             },
  //           },
  //         },
  //         {
  //           x: 1340,
  //           y: 3212,
  //           id: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 596.148,
  //             showNode: true,
  //             stepName: '判断器',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '1009',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'is_hit_handling_method_list'],
  //                       value: '1',
  //                       compare: 'len_ge',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '4908',
  //                   type: 'ELSE IF 1',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'directly_return'],
  //                       value: '1',
  //                       compare: 'len_ge',
  //                     },
  //                     {
  //                       field: [],
  //                       value: '',
  //                       compare: '',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '161',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '1009',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '4908',
  //                 index: 1,
  //                 height: 173.383,
  //               },
  //               {
  //                 id: '161',
  //                 index: 2,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 2960,
  //           id: '4ffe1086-25df-4c85-b168-979b5bbf0a26',
  //           type: 'reply-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 378,
  //             showNode: true,
  //             stepName: '指定回复',
  //             condition: 'AND',
  //             node_data: {
  //               fields: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'directly_return'],
  //               content: '',
  //               is_result: true,
  //               reply_type: 'referencing',
  //             },
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 3550,
  //           id: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '已知信息：\n{{知识库检索.data}}\n问题：\n{{开始.question}}',
  //               system: '{{判断器.branch_name}}',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: true,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 0,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 4380,
  //           id: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话1',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '{{开始.question}}',
  //               system: '',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: true,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 0,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //         {
  //           x: 2530,
  //           y: 4362,
  //           id: '5363a609-d1f8-43cf-be5f-6409dfa78fd4',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 414.766,
  //             showNode: true,
  //             stepName: '判断器1',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '5195',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['309d0eef-c597-46b5-8d51-b9a28aaef4c7', 'answer'],
  //                       value: '',
  //                       compare: 'contain',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '109',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '5195',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '109',
  //                 index: 1,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 2430,
  //           y: 3562,
  //           id: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 414.766,
  //             showNode: true,
  //             stepName: '判断器2',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '4281',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['f1f1ee18-5a02-46f6-b4e6-226253cdffbb', 'answer'],
  //                       value: '',
  //                       compare: 'contain',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '9966',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '4281',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '9966',
  //                 index: 1,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 2550,
  //           y: 3510,
  //           id: '413ef8a7-edb9-4293-9b1e-96011559f318',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话2',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '已知信息：\n{{知识库检索.data}}\n问题：\n{{开始.question}}',
  //               system: '{{判断器.branch_name}}',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: false,
  //               max_tokens: null,
  //               temperature: null,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 1,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     type: 'WORK_FLOW',
  //     problem_optimization_prompt:
  //       '()里面是用户问题,根据上下文回答揣测用户问题({question}) 要求: 输出一个补全问题,并且放在<data></data>标签中',
  //     tts_model_enable: false,
  //     stt_model_enable: false,
  //     tts_type: 'BROWSER',
  //     clean_time: 180,
  //     file_upload_enable: false,
  //     file_upload_setting: {},
  //     user: 'f0dd8f71-e4ee-11ee-8c84-a8a1595801ab',
  //     model: null,
  //     tts_model: null,
  //     stt_model: null,
  //     multiple_rounds_dialogue: false,
  //     dataset_id_list: ['9640d618-86d1-11ef-b50c-0242ac190002'],
  //   },
  // })
  return get(`${prefix}/${application_id}`, undefined, loading)
}

/**
 * 获得当前应用可使用的知识库
 * @param 参数 application_id
 */
const getApplicationDataset: (application_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/list_dataset`, undefined, loading)
}

/**
 * 获取AccessToken
 * @param 参数 application_id
 */
const getAccessToken: (application_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/access_token`, undefined, loading)
}

/**
 * 修改AccessToken
 * @param 参数 application_id
 * data {
 *  "is_active": true
 * }
 */
const putAccessToken: (application_id: string, data: any, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  data,
  loading,
) => {
  return put(`${prefix}/${application_id}/access_token`, data, undefined, loading)
}

/**
 * 应用认证
 * @param 参数
 {
 "access_token": "string"
 }
 */
const postAppAuthentication: (
  access_token: string,
  loading?: Ref<boolean>,
  authentication_value?: any,
) => Promise<any> = (access_token, loading, authentication_value) => {
  return post(`${prefix}/authentication`, { access_token: access_token, authentication_value }, undefined, loading)
}

/**
 * 对话获取应用相关信息
 * @param 参数
 {
 "access_token": "string"
 }
 */
const getAppProfile: (loading?: Ref<boolean>) => Promise<any> = (loading) => {
  return get(`${prefix}/profile`, undefined, loading)
}

/**
 * 获得临时回话Id
 * @param 参数

 }
 */
const postChatOpen: (data: ApplicationFormType) => Promise<Result<any>> = (data) => {
  return post(`${prefix}/chat/open`, data)
}

/**
 * 获得工作流临时回话Id
 * @param 参数

 }
 */
const postWorkflowChatOpen: (data: ApplicationFormType) => Promise<Result<any>> = (data) => {
  return post(`${prefix}/chat_workflow/open`, data)
}

/**
 * 正式回话Id
 * @param 参数
 * {
 "model_id": "string",
 "multiple_rounds_dialogue": true,
 "dataset_id_list": [
 "string"
 ]
 }
 */
const getChatOpen: (application_id: String) => Promise<Result<any>> = (application_id) => {
  return get(`${prefix}/${application_id}/chat/open`)
}
/**
 * 对话
 * @param 参数
 * chat_id: string
 * data
 */
const postChatMessage: (chat_id: string, data: any) => Promise<any> = (chat_id, data) => {
  return postStream(`/api${prefix}/chat_message/${chat_id}`, data)
}

/**
 * 点赞、点踩
 * @param 参数
 * application_id : string; chat_id : string; chat_record_id : string
 * {
 "vote_status": "string", // -1 0 1
 }
 */
const putChatVote: (
  application_id: string,
  chat_id: string,
  chat_record_id: string,
  vote_status: string,
  loading?: Ref<boolean>,
) => Promise<any> = (application_id, chat_id, chat_record_id, vote_status, loading) => {
  return put(
    `${prefix}/${application_id}/chat/${chat_id}/chat_record/${chat_record_id}/vote`,
    {
      vote_status,
    },
    undefined,
    loading,
  )
}

/**
 * 命中测试列表
 * @param application_id
 * @param loading
 * @query  { query_text: string, top_number: number, similarity: number }
 * @returns
 */
const getApplicationHitTest: (
  application_id: string,
  data: any,
  loading?: Ref<boolean>,
) => Promise<Result<Array<any>>> = (application_id, data, loading) => {
  return get(`${prefix}/${application_id}/hit_test`, data, loading)
}

/**
 * 获取当前用户可使用的模型列表
 * @param application_id
 * @param loading
 * @query  { query_text: string, top_number: number, similarity: number }
 * @returns
 */
const getApplicationModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, loading)
}

/**
 * 获取当前用户可使用的模型列表
 * @param application_id
 * @param loading
 * @query  { query_text: string, top_number: number, similarity: number }
 * @returns
 */
const getApplicationRerankerModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, { model_type: 'RERANKER' }, loading)
}

/**
 * 获取当前用户可使用的模型列表
 * @param application_id
 * @param loading
 * @query  { query_text: string, top_number: number, similarity: number }
 * @returns
 */
const getApplicationSTTModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, { model_type: 'STT' }, loading)
}

/**
 * 获取当前用户可使用的模型列表
 * @param application_id
 * @param loading
 * @query  { query_text: string, top_number: number, similarity: number }
 * @returns
 */
const getApplicationTTSModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, { model_type: 'TTS' }, loading)
}

const getApplicationImageModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, { model_type: 'IMAGE' }, loading)
}

const getApplicationTTIModel: (application_id: string, loading?: Ref<boolean>) => Promise<Result<Array<any>>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/model`, { model_type: 'TTI' }, loading)
}

/**
 * 发布应用
 * @param 参数
 */
const putPublishApplication: (
  application_id: String,
  data: ApplicationFormType,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, data, loading) => {
  return put(`${prefix}/${application_id}/publish`, data, undefined, loading)
}
/**
 * 获取应用所属的函数库列表
 * @param application_id 应用id
 * @param loading
 * @returns
 */
const listFunctionLib: (application_id: String, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  // return Promise.resolve({
  //   code: 200,
  //   message: '成功',
  //   data: [
  //     {
  //       id: '0c6afdda-f029-11ef-a60e-0242ac190002',
  //       name: 'Sql 正则',
  //       desc: '',
  //       code: 'def add_numbers(a, b):\n    """\n    此函数用于计算两个数字的和\n    :param a: 第一个数字\n    :param b: 第二个数字\n    :return: 两个数字的和\n    """\n    return a + b',
  //       input_field_list: [
  //         {
  //           name: 'a',
  //           type: 'string',
  //           source: 'reference',
  //           is_required: true,
  //         },
  //         {
  //           name: 'b',
  //           type: 'string',
  //           source: 'reference',
  //           is_required: true,
  //         },
  //       ],
  //       permission_type: 'PUBLIC',
  //       is_active: true,
  //       user_id: 'f0dd8f71-e4ee-11ee-8c84-a8a1595801ab',
  //       create_time: '2025-02-21T15:54:16.444835',
  //       update_time: '2025-02-21T15:54:16.444887',
  //     },
  //   ],
  // })
  return get(`${prefix}/${application_id}/function_lib`, undefined, loading)
}
/**
 * 获取当前人的所有应用列表
 * @param application_id 应用id
 * @param loading
 * @returns
 */
export const getApplicationList: (application_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/application`, undefined, loading)
  // return Promise.resolve({
  //   code: 200,
  //   message: '成功',
  //   data: {
  //     id: 'e6cf6fdc-86d0-11ef-a942-0242ac190002',
  //     create_time: '2024-10-10T14:28:45.546439',
  //     update_time: '2025-02-28T16:29:29.168352',
  //     name: 'test01',
  //     desc: '',
  //     prologue:
  //       '您好，我是开发小助手，您可以向我提出MaxKB使用问题。\n- MaxKB如何安装？\n- 如何收费？\n- 收费版功能差异',
  //     dialogue_number: 0,
  //     dataset_setting: {
  //       search_mode: 'embedding',
  //       no_references_setting: {
  //         status: 'ai_questioning',
  //         value: '{question}',
  //       },
  //     },
  //     model_setting: {},
  //     model_params_setting: {},
  //     tts_model_params_setting: {},
  //     problem_optimization: false,
  //     icon: '/ui/favicon.ico',
  //     work_flow: {
  //       edges: [
  //         {
  //           id: '7d0f166f-c472-41b2-b9a2-c294f4c83d73',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 540,
  //             y: 3190,
  //           },
  //           pointsList: [
  //             {
  //               x: 350,
  //               y: 3090,
  //             },
  //             {
  //               x: 460,
  //               y: 3090,
  //             },
  //             {
  //               x: 430,
  //               y: 3190,
  //             },
  //             {
  //               x: 540,
  //               y: 3190,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 350,
  //             y: 3090,
  //           },
  //           sourceNodeId: 'start-node',
  //           targetNodeId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           sourceAnchorId: 'start-node_right',
  //           targetAnchorId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5_left',
  //         },
  //         {
  //           id: '35cb86dd-f328-429e-a973-12fd7218b696',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1050,
  //             y: 3212,
  //           },
  //           pointsList: [
  //             {
  //               x: 860,
  //               y: 3190,
  //             },
  //             {
  //               x: 970,
  //               y: 3190,
  //             },
  //             {
  //               x: 940,
  //               y: 3212,
  //             },
  //             {
  //               x: 1050,
  //               y: 3212,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 860,
  //             y: 3190,
  //           },
  //           sourceNodeId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           targetNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           sourceAnchorId: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5_right',
  //           targetAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_left',
  //         },
  //         {
  //           id: 'e8f6cfe6-7e48-41cd-abd3-abfb5304d0d8',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 2960,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3049.6175,
  //             },
  //             {
  //               x: 1740,
  //               y: 3049.6175,
  //             },
  //             {
  //               x: 1630,
  //               y: 2960,
  //             },
  //             {
  //               x: 1740,
  //               y: 2960,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3049.6175,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: '4ffe1086-25df-4c85-b168-979b5bbf0a26',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_1009_right',
  //           targetAnchorId: '4ffe1086-25df-4c85-b168-979b5bbf0a26_left',
  //         },
  //         {
  //           id: '994ff325-6f7a-4ebc-b61b-10e15519d6d2',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 3550,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3205.0004999999996,
  //             },
  //             {
  //               x: 1740,
  //               y: 3205.0004999999996,
  //             },
  //             {
  //               x: 1630,
  //               y: 3550,
  //             },
  //             {
  //               x: 1740,
  //               y: 3550,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3205.0004999999996,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_4908_right',
  //           targetAnchorId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb_left',
  //         },
  //         {
  //           id: '19270caf-bb9f-4ba7-9bf8-200aa70fecd5',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 1740,
  //             y: 4380,
  //           },
  //           pointsList: [
  //             {
  //               x: 1630,
  //               y: 3321.692,
  //             },
  //             {
  //               x: 1740,
  //               y: 3321.692,
  //             },
  //             {
  //               x: 1630,
  //               y: 4380,
  //             },
  //             {
  //               x: 1740,
  //               y: 4380,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 1630,
  //             y: 3321.692,
  //           },
  //           sourceNodeId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           targetNodeId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           sourceAnchorId: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b_161_right',
  //           targetAnchorId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7_left',
  //         },
  //         {
  //           id: '7e355796-290f-4d49-b66c-c8881bad3149',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 2240,
  //             y: 4362,
  //           },
  //           pointsList: [
  //             {
  //               x: 2060,
  //               y: 4380,
  //             },
  //             {
  //               x: 2170,
  //               y: 4380,
  //             },
  //             {
  //               x: 2130,
  //               y: 4362,
  //             },
  //             {
  //               x: 2240,
  //               y: 4362,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 2060,
  //             y: 4380,
  //           },
  //           sourceNodeId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           targetNodeId: '5363a609-d1f8-43cf-be5f-6409dfa78fd4',
  //           sourceAnchorId: '309d0eef-c597-46b5-8d51-b9a28aaef4c7_right',
  //           targetAnchorId: '5363a609-d1f8-43cf-be5f-6409dfa78fd4_left',
  //         },
  //         {
  //           id: 'ba38c274-0d5d-4079-8621-a19326223efc',
  //           type: 'app-edge',
  //           endPoint: {
  //             x: 2140,
  //             y: 3562,
  //           },
  //           pointsList: [
  //             {
  //               x: 2060,
  //               y: 3550,
  //             },
  //             {
  //               x: 2170,
  //               y: 3550,
  //             },
  //             {
  //               x: 2030,
  //               y: 3562,
  //             },
  //             {
  //               x: 2140,
  //               y: 3562,
  //             },
  //           ],
  //           properties: {},
  //           startPoint: {
  //             x: 2060,
  //             y: 3550,
  //           },
  //           sourceNodeId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           targetNodeId: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3',
  //           sourceAnchorId: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb_right',
  //           targetAnchorId: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3_left',
  //         },
  //       ],
  //       nodes: [
  //         {
  //           x: -350,
  //           y: 2950,
  //           id: 'base-node',
  //           type: 'base-node',
  //           properties: {
  //             config: {},
  //             height: 727,
  //             showNode: true,
  //             stepName: '基本信息',
  //             node_data: {
  //               desc: '',
  //               name: 'test01',
  //               prologue:
  //                 '您好，我是开发小助手，您可以向我提出MaxKB使用问题。\n- MaxKB如何安装？\n- 如何收费？\n- 收费版功能差异',
  //               tts_type: 'BROWSER',
  //               stt_model_enable: false,
  //               tts_model_enable: false,
  //             },
  //             input_field_list: [],
  //             api_input_field_list: [],
  //             user_input_field_list: [],
  //           },
  //         },
  //         {
  //           x: 190,
  //           y: 3090,
  //           id: 'start-node',
  //           type: 'start-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '用户问题',
  //                   value: 'question',
  //                 },
  //               ],
  //               globalFields: [
  //                 {
  //                   label: '当前时间',
  //                   value: 'time',
  //                 },
  //                 {
  //                   label: '历史聊天记录',
  //                   value: 'history_context',
  //                 },
  //                 {
  //                   label: '对话id',
  //                   value: 'chat_id',
  //                 },
  //               ],
  //             },
  //             fields: [
  //               {
  //                 label: '用户问题',
  //                 value: 'question',
  //               },
  //             ],
  //             height: 364,
  //             showNode: true,
  //             stepName: '开始',
  //             globalFields: [
  //               {
  //                 label: '当前时间',
  //                 value: 'time',
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 700,
  //           y: 3190,
  //           id: 'b931efe5-5b66-46e0-ae3b-0160cb18eeb5',
  //           type: 'search-dataset-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '检索结果的分段列表',
  //                   value: 'paragraph_list',
  //                 },
  //                 {
  //                   label: '满足直接回答的分段列表',
  //                   value: 'is_hit_handling_method_list',
  //                 },
  //                 {
  //                   label: '检索结果',
  //                   value: 'data',
  //                 },
  //                 {
  //                   label: '满足直接回答的分段内容',
  //                   value: 'directly_return',
  //                 },
  //               ],
  //             },
  //             height: 794,
  //             showNode: true,
  //             stepName: '知识库检索',
  //             condition: 'AND',
  //             node_data: {
  //               dataset_id_list: [],
  //               dataset_setting: {
  //                 top_n: 3,
  //                 similarity: 0.6,
  //                 search_mode: 'embedding',
  //                 max_paragraph_char_number: 5000,
  //               },
  //               source_dataset_id_list: [],
  //               question_reference_address: ['start-node', 'question'],
  //             },
  //           },
  //         },
  //         {
  //           x: 1340,
  //           y: 3212,
  //           id: 'fc60863a-dec2-4854-9e5a-7a44b7187a2b',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 596.148,
  //             showNode: true,
  //             stepName: '判断器',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '1009',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'is_hit_handling_method_list'],
  //                       value: '1',
  //                       compare: 'len_ge',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '4908',
  //                   type: 'ELSE IF 1',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'directly_return'],
  //                       value: '1',
  //                       compare: 'len_ge',
  //                     },
  //                     {
  //                       field: [],
  //                       value: '',
  //                       compare: '',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '161',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '1009',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '4908',
  //                 index: 1,
  //                 height: 173.383,
  //               },
  //               {
  //                 id: '161',
  //                 index: 2,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 2960,
  //           id: '4ffe1086-25df-4c85-b168-979b5bbf0a26',
  //           type: 'reply-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: '内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 378,
  //             showNode: true,
  //             stepName: '指定回复',
  //             condition: 'AND',
  //             node_data: {
  //               fields: ['b931efe5-5b66-46e0-ae3b-0160cb18eeb5', 'directly_return'],
  //               content: '',
  //               is_result: true,
  //               reply_type: 'referencing',
  //             },
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 3550,
  //           id: 'f1f1ee18-5a02-46f6-b4e6-226253cdffbb',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '已知信息：\n{{知识库检索.data}}\n问题：\n{{开始.question}}',
  //               system: '{{判断器.branch_name}}',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: true,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 0,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //         {
  //           x: 1900,
  //           y: 4380,
  //           id: '309d0eef-c597-46b5-8d51-b9a28aaef4c7',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话1',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '{{开始.question}}',
  //               system: '',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: true,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 0,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //         {
  //           x: 2530,
  //           y: 4362,
  //           id: '5363a609-d1f8-43cf-be5f-6409dfa78fd4',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 414.766,
  //             showNode: true,
  //             stepName: '判断器1',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '5195',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['309d0eef-c597-46b5-8d51-b9a28aaef4c7', 'answer'],
  //                       value: '',
  //                       compare: 'contain',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '109',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '5195',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '109',
  //                 index: 1,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 2430,
  //           y: 3562,
  //           id: '8fcd0294-8644-4566-a1af-1e6d2f0b9db3',
  //           type: 'condition-node',
  //           properties: {
  //             width: 600,
  //             config: {
  //               fields: [
  //                 {
  //                   label: '分支名称',
  //                   value: 'branch_name',
  //                 },
  //               ],
  //             },
  //             height: 414.766,
  //             showNode: true,
  //             stepName: '判断器2',
  //             condition: 'AND',
  //             node_data: {
  //               branch: [
  //                 {
  //                   id: '4281',
  //                   type: 'IF',
  //                   condition: 'and',
  //                   conditions: [
  //                     {
  //                       field: ['f1f1ee18-5a02-46f6-b4e6-226253cdffbb', 'answer'],
  //                       value: '',
  //                       compare: 'contain',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   id: '9966',
  //                   type: 'ELSE',
  //                   condition: 'and',
  //                   conditions: [],
  //                 },
  //               ],
  //             },
  //             branch_condition_list: [
  //               {
  //                 id: '4281',
  //                 index: 0,
  //                 height: 121.383,
  //               },
  //               {
  //                 id: '9966',
  //                 index: 1,
  //                 height: 44,
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           x: 2550,
  //           y: 3510,
  //           id: '413ef8a7-edb9-4293-9b1e-96011559f318',
  //           type: 'ai-chat-node',
  //           properties: {
  //             config: {
  //               fields: [
  //                 {
  //                   label: 'AI 回答内容',
  //                   value: 'answer',
  //                 },
  //               ],
  //             },
  //             height: 842,
  //             showNode: true,
  //             stepName: 'AI 对话2',
  //             condition: 'AND',
  //             node_data: {
  //               prompt: '已知信息：\n{{知识库检索.data}}\n问题：\n{{开始.question}}',
  //               system: '{{判断器.branch_name}}',
  //               model_id: '867aaf2a-86d0-11ef-9098-0242ac190002',
  //               is_result: false,
  //               max_tokens: null,
  //               temperature: null,
  //               dialogue_type: 'WORKFLOW',
  //               dialogue_number: 1,
  //               model_params_setting: {
  //                 max_tokens: 1024,
  //                 temperature: 0.3,
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     type: 'WORK_FLOW',
  //     problem_optimization_prompt:
  //       '()里面是用户问题,根据上下文回答揣测用户问题({question}) 要求: 输出一个补全问题,并且放在<data></data>标签中',
  //     tts_model_enable: false,
  //     stt_model_enable: false,
  //     tts_type: 'BROWSER',
  //     clean_time: 180,
  //     file_upload_enable: false,
  //     file_upload_setting: {},
  //     user: 'f0dd8f71-e4ee-11ee-8c84-a8a1595801ab',
  //     model: null,
  //     tts_model: null,
  //     stt_model: null,
  //     multiple_rounds_dialogue: false,
  //     dataset_id_list: ['9640d618-86d1-11ef-b50c-0242ac190002'],
  //   },
  // })
}
/**
 * 获取应用所属的函数库
 * @param application_id
 * @param function_lib_id
 * @param loading
 * @returns
 */
const getFunctionLib: (
  application_id: String,
  function_lib_id: String,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, function_lib_id, loading) => {
  return get(`${prefix}/${application_id}/function_lib/${function_lib_id}`, undefined, loading)
}

const getApplicationById: (application_id: String, app_id: String, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  app_id,
  loading,
) => {
  return get(`${prefix}/${application_id}/application/${app_id}`, undefined, loading)
}
/**
 * 获取模型参数表单
 * @param application_id 应用id
 * @param model_id      模型id
 * @param loading
 * @returns
 */
const getModelParamsForm: (
  application_id: String,
  model_id: String,
  loading?: Ref<boolean>,
) => Promise<Result<Array<FormField>>> = (application_id, model_id, loading) => {
  return get(`${prefix}/${application_id}/model_params_form/${model_id}`, undefined, loading)
}

/**
 * 上传文档图片附件
 */
const uploadFile: (
  application_id: String,
  chat_id: String,
  data: any,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, chat_id, data, loading) => {
  return post(`${prefix}/${application_id}/chat/${chat_id}/upload_file`, data, undefined, loading)
}

/**
 * 语音转文本
 */
const postSpeechToText: (application_id: String, data: any, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  data,
  loading,
) => {
  return post(`${prefix}/${application_id}/speech_to_text`, data, undefined, loading)
}

/**
 * 文本转语音
 */
const postTextToSpeech: (application_id: String, data: any, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  data,
  loading,
) => {
  return download(`${prefix}/${application_id}/text_to_speech`, 'post', data, undefined, loading)
}

/**
 * 播放测试文本
 */
const playDemoText: (application_id: String, data: any, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  data,
  loading,
) => {
  return download(`${prefix}/${application_id}/play_demo_text`, 'post', data, undefined, loading)
}
/**
 * 获取平台状态
 */
const getPlatformStatus: (application_id: string) => Promise<Result<any>> = (application_id) => {
  return get(`/platform/${application_id}/status`)
}
/**
 * 获取平台配置
 */
const getPlatformConfig: (application_id: string, type: string) => Promise<Result<any>> = (application_id, type) => {
  return get(`/platform/${application_id}/${type}`)
}
/**
 * 更新平台配置
 */
const updatePlatformConfig: (
  application_id: string,
  type: string,
  data: any,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, type, data, loading) => {
  return post(`/platform/${application_id}/${type}`, data, undefined, loading)
}
/**
 * 更新平台状态
 */
const updatePlatformStatus: (application_id: string, data: any) => Promise<Result<any>> = (application_id, data) => {
  return post(`/platform/${application_id}/status`, data)
}
/**
 * 验证密码
 */
const validatePassword: (application_id: string, password: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  password,
  loading,
) => {
  return get(`/application/${application_id}/auth/${password}`, undefined, loading)
}

/**
 * workflow历史版本
 */
const getWorkFlowVersion: (application_id: string, loading?: Ref<boolean>) => Promise<Result<any>> = (
  application_id,
  loading,
) => {
  return get(`/application/${application_id}/work_flow_version`, undefined, loading)
}

/**
 * workflow历史版本详情
 */
const getWorkFlowVersionDetail: (
  application_id: string,
  application_version_id: string,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, application_version_id, loading) => {
  return get(`/application/${application_id}/work_flow_version/${application_version_id}`, undefined, loading)
}
/**
 * 修改workflow历史版本
 */
const putWorkFlowVersion: (
  application_id: string,
  application_version_id: string,
  data: any,
  loading?: Ref<boolean>,
) => Promise<Result<any>> = (application_id, application_version_id, data, loading) => {
  return put(`/application/${application_id}/work_flow_version/${application_version_id}`, data, undefined, loading)
}

const getUserList: (type: string, loading?: Ref<boolean>) => Promise<Result<any>> = (type, loading) => {
  return get(`/user/list/${type}`, undefined, loading)
}

const exportApplication = (application_id: string, application_name: string, loading?: Ref<boolean>) => {
  return exportFile(application_name + '.mk', `/application/${application_id}/export`, undefined, loading)
}

/**
 * 导入应用
 */
const importApplication: (data: any, loading?: Ref<boolean>) => Promise<Result<any>> = (data, loading) => {
  return post(`${prefix}/import`, data, undefined, loading)
}
export default {
  getAllAppilcation,
  getApplication,
  postApplication,
  putApplication,
  postChatOpen,
  getChatOpen,
  postChatMessage,
  delApplication,
  getApplicationDetail,
  getApplicationDataset,
  getAccessToken,
  putAccessToken,
  postAppAuthentication,
  getAppProfile,
  putChatVote,
  getApplicationHitTest,
  getApplicationModel,
  putPublishApplication,
  postWorkflowChatOpen,
  listFunctionLib,
  getFunctionLib,
  getModelParamsForm,
  getApplicationRerankerModel,
  getApplicationSTTModel,
  getApplicationTTSModel,
  getApplicationImageModel,
  getApplicationTTIModel,
  postSpeechToText,
  postTextToSpeech,
  getPlatformStatus,
  getPlatformConfig,
  updatePlatformConfig,
  updatePlatformStatus,
  validatePassword,
  getWorkFlowVersion,
  getWorkFlowVersionDetail,
  putWorkFlowVersion,
  playDemoText,
  getUserList,
  getApplicationList,
  uploadFile,
  exportApplication,
  importApplication,
  getApplicationById,
}
