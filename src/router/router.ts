import { createRouter,createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes : Array<RouteRecordRaw>=[
    {
        path: '/',
        redirect:'/login'
    },
    {
        path: '/login',
        component:()=>import('@/views/Login.vue')
    },
    {
        path: '/home',
        component:()=>import('@/views/Home.vue')
    }
]
let routers=createRouter({
    routes,
    "history": createWebHashHistory()
    // "hash": createWebHashHistory()
    // "abstract": createMemoryHistory()
})
export default routers