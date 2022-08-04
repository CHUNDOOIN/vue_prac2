import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";

const routes = [
    {
        // :id는 아무 문자나 들어와도된다는 뜻.
        path: "/detail/:id",
        component: Detail,
    },

    {
        path: "/list",
        component: List,
    },

    {
        path: "/",
        component: Home,
    },

    {
        path: "/detail",
        component: Detail,
    },

    {
        path: "/:assad",
        component: Detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
