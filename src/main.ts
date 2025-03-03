import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'

import globComps from '@/utils/autoImportComps.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import directives from '@/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(directives)
app.use(globComps)
app.use(createPinia()).use(ElementPlus)
app.use(router)

app.mount('#app')
