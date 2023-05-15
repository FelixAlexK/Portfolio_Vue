import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import('../views/TheAbout.vue') },
    { path: '/impressum', name: 'Impressum', component: () => import('../views/TheImpressum.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router