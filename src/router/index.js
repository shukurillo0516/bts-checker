import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active',
});
export default router