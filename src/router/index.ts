import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

let index = createRouter({
    history: createWebHistory(),
    routes: routes,
})


index.beforeEach((to, _from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title.toString();
    }
    next()
})

export default index