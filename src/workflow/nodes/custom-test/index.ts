import CustomNodeVue from './index.vue'
import { AppNode, AppNodeModel } from '@/workflow/common/app-node'
class CustomNode extends AppNode {
  constructor(props: any) {
    super(props, CustomNodeVue)
  }
}
export default {
  type: 'custom-test',
  model: AppNodeModel,
  view: CustomNode
}

