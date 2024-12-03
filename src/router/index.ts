import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

const index = createRouter({
    history: createWebHistory(),
    routes,
})


index.beforeEach((to, _from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
    next()
})

export default index