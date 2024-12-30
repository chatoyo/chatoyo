import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const routerInstance = createRouter({
  history: createWebHistory(),
  routes: routes
});

routerInstance.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default routerInstance;
