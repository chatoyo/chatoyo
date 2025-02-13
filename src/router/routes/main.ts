// Main Layout Routes

import { RouteRecordRaw } from 'vue-router';

const mainRoutes: RouteRecordRaw = {
  component: () => import('@layouts/main.vue'),
  name: 'main-layout',
  path: '/',
  children: [
    {
      component: () => import('@pages/main/home.vue'),
      name: 'home',
      path: 'home',
      alias: [''],
      meta: {
        title: '首页 - ChatoYo'
      }
    },
    {
      component: () => import('@/pages/main/channels.vue'),
      name: 'message',
      path: 'message',
      meta: {
        title: '消息中心 - ChatoYo'
      }
    },
    {
      component: () => import('@pages/main/contact.vue'),
      name: 'contact',
      path: 'contact',
      meta: {
        title: '联系人 - ChatoYo'
      }
    },
    {
      component: () => import('@pages/main/setting.vue'),
      name: 'setting',
      path: 'setting',
      meta: {
        title: '设置 - ChatoYo'
      }
    },
    {
      component: () => import('@pages/main/profile.vue'),
      name: 'profile',
      path: 'profile',
      meta: {
        title: '个人资料 - ChatoYo'
      }
    }
  ]
};

export default mainRoutes;
