import CustomLibVue from './index.vue'
import { AppNode, AppNodeModel } from '@/workflow/common/app-node'
class CustomNode extends AppNode {
  constructor(props: any) {
    super(props, CustomLibVue)
  }
}
export default {
  type: 'custom-lib',
  model: AppNodeModel,
  view: CustomNode
}

