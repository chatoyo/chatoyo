import {createApp} from 'vue'
import App from './App.vue'

// Stylesheets
import './assets/tailwind.css'
import './style.css'
import 'primeicons/primeicons.css'

// Dependencies
import {createPinia} from "pinia";
import router from "./router";

// Dependency injection
const pinia = createPinia()

// Instance declarations
const instance = createApp(App)
instance.use(pinia)
instance.use(router)
instance.mount('#app')
