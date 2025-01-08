import { createApp } from 'vue';
import App from './App.vue';

// Stylesheets
import './assets/tailwind.css';
import './style.css';
import 'primeicons/primeicons.css';

// Dependencies
import pinia from './store';
import router from './router';
import PrimeVue from 'primevue/config';

// Dependency injection

// Instance declarations
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const instance = createApp(App);

instance.use(PrimeVue, {
  theme: 'none'
});
instance.use(pinia);
instance.use(router);
instance.mount('#app');
