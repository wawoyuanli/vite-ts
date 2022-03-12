import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// import { Button, message } from 'ant-design-vue'; //按需引入

const app=createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
app.config.warnHandler=()=>null
