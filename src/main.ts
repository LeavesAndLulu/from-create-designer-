import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import formCreate from '@form-create/element-ui'
// import FcDesigner from '@form-create/designer'
import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'

import FcTable  from '../src/components/SignBoard.vue'

formCreate.component('fc-table', FcTable)

// 引入代码编辑器
// .use(formCreate).use(FcDesigner)



createApp(App).use(ElementPlus).use(formCreate).use(FcDesigner).mount('#app')
