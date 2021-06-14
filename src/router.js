import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home"
import Main from "@/components/Main/Main";
import Mine from "@/components/Mine/Mine";
import Upload from "@/components/Upload/Upload";

Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: '/main',
        children: [
            {
                component: Main,
                path: '/main'
            },
            {
                component: Mine,
                path: '/mine'
            },
            {
                component: Upload,
                path: '/upload'
            }
        ]
    }
]



const router=new VueRouter({
    routes,
    mode: 'history'
})


export default router