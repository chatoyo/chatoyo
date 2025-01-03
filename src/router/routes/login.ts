// Login Layout Routes

import { RouteRecordRaw } from 'vue-router';

const loginRoutes: RouteRecordRaw = {
  component: () => import('@layouts/login.vue'),
  name: 'login-layout',
  path: '/login',
  children: [
    {
      component: () => import('@pages/login/login.vue'),
      name: 'index',
      path: '',
      meta: {
        title: '登陆 - ChatoYo'
      }
    },
    {
      component: () => import('@pages/login/reset-password.vue'),
      name: 'reset-password',
      path: 'reset-password',
      meta: {
        title: '重置密码 - ChatoYo'
      }
    }
  ]
};

export default loginRoutes;
