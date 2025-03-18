export const customNode = {
  type: 'custom-test',
  text: '自定义测试组件',
  label: '自定义测试',
  height: 340,
  properties: {
    stepName: '自定义测试',
    config: {
      fields: [
        {
          label: '自定义测试内容',
          value: 'answer',
        },
      ],
    },
  },
}

export const customLib = {
  type: 'custom-lib',
  text: '知识库检索',
  label: '知识库检索组件，负责RAG功能',
  height: 340,
  properties: {
    stepName: '自定义知识库检索',
    config: {
      fields: [
        {
          label: '知识库检索组件',
          value: 'answer',
        },
      ],
    },
  },
}
