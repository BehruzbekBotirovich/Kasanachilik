import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import router from './router'
import Antd, { Dropdown } from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css'; // Попробуйте внести изменения здесь
import router from './router'

// global componentalar 
import OrangeBtn from '@/components/GlobalUI/OrangeBtn.vue'

import './style/input.css'





const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.component('orange-btn', OrangeBtn)



app.mount('#app')
