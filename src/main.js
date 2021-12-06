import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://192.168.3.70/api/v1/'

createApp(App).use(store).use(router).mount('#app')
