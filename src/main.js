import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'//vue3-element-puls
import zhCn from 'element-plus/es/locale/lang/zh-cn'//element国际化，引入中文包
import "@/style/index.css";//全局引入css样式
import urls from '@/utils/api/index.js'
import request from '@/utils/api/methed'

const app=createApp(App)
app.use(router)
app.use(ElementPlus,{ locale: zhCn})
app.config.globalProperties.$urls=urls
app.config.globalProperties.$request=request

app.mount('#app')
