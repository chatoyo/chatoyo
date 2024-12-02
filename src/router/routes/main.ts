// Main Layout Routes

import {RouteRecordRaw} from "vue-router";

export default {
    children: [
        {
            component: () => import('@pages/main/home.vue'),
            name: 'home',
            path: "home",
            alias: ['']
        },
        {
            component: () => import('@pages/main/message.vue'),
            name: 'message',
            path: "message",
        },
        {
            component: () => import('@pages/main/contact.vue'),
            name: 'contact',
            path: "contact",
        },
        {
            component: () => import('@pages/main/setting.vue'),
            name: 'setting',
            path: "setting",
        }
    ],
    component: () => import('@layouts/main.vue'),
    name: 'main-layout',
    path: "/",
} as RouteRecordRaw