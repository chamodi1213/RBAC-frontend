import Vue from 'vue'
import VueRouter from 'vue-router'

import Tenant from '../Components/Tenant.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/branch1',
        name: 'branch1',
        component: Tenant,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
