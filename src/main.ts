import {createApp} from 'vue'
import './assets/tailwind.css'
import './style.css'
import App from './App.vue'

import {createPinia} from "pinia";
import router from "./router";

const pinia = createPinia()

const instance = createApp(App)
instance.use(pinia)
instance.use(router)
instance.mount('#app')
