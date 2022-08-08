import { createWebHashHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        // :id는 아무 문자나 들어와도된다는 뜻.
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ],
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
        path: "/hello",
        component: HelloWorld,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
